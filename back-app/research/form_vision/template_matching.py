import cv2
from typing import Tuple
from research.form_vision.image import Image, NormalizedCoords


class TemplateMatcher:
    width = 800

    def __init__(
        self,
        template_image: Image,
        reference_region: Tuple[NormalizedCoords, NormalizedCoords],
    ):
        self._template = template_image.resize(self.width)
        self._reference_region = reference_region
        self._reference = self._template.select_subimage(*reference_region)
        self._ref_region_height = (
            reference_region[1][0] - reference_region[0][0]
        )
        self._ref_region_width = (
            reference_region[1][1] - reference_region[0][1]
        )

    def match(self, img: Image) -> Image:
        img = img.crop_to_aspect_ratio(self._template.aspect_ratio)
        img = img.resize(width=self.width)
        region_to_search_coords = self._around_reference_region()
        region_to_search = img.select_subimage(*region_to_search_coords)

        res = cv2.matchTemplate(
            region_to_search.opencv_data,
            self._reference.opencv_data,
            cv2.TM_CCOEFF,
        )
        _, max_val, _, max_loc = cv2.minMaxLoc(res)
        found_match = region_to_search[
            max_loc[1] : max_loc[1]
            + int(self._ref_region_height * self._template.shape[0]),
            max_loc[0] : max_loc[0]
            + int(self._ref_region_width * self._template.shape[1]),
        ].show()

    def _around_reference_region(
        self, coeff: float = 0.5
    ) -> Tuple[NormalizedCoords, NormalizedCoords]:

        start_vert = max(
            0,
            self._reference_region[0][0] - self._ref_region_height * coeff / 2,
        )
        start_horiz = max(
            0,
            self._reference_region[0][1] - self._ref_region_width * coeff / 2,
        )
        end_vert = min(
            1,
            self._reference_region[1][0] + self._ref_region_height * coeff / 2,
        )
        end_horiz = min(
            1,
            self._reference_region[1][1] + self._ref_region_width * coeff / 2,
        )
        return ((start_vert, start_horiz), (end_vert, end_horiz))

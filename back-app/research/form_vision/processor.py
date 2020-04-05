from typing import Tuple, Dict
from research.form_vision.image import Image

NormalizedCoords = Tuple[float, float]


class ImageProcessor:
    def __init__(self, image: Image):
        self.image = image

    def select_subimages(
        self, coords_dict: Dict[str, Tuple[NormalizedCoords, NormalizedCoords]]
    ) -> Dict[str, Image]:
        return {k: self.select_subimage(*v) for k, v in coords_dict.items()}

    def select_subimage(
        self, top_left: NormalizedCoords, bottom_right: NormalizedCoords
    ) -> Image:
        top_left_px = self._fraction_to_pixels(top_left)
        bot_right_px = self._fraction_to_pixels(bottom_right)
        return self.image[
            top_left_px[0] : bot_right_px[0], top_left_px[1] : bot_right_px[1]
        ]

    def _fraction_to_pixels(self, fracs: NormalizedCoords) -> Tuple[int, int]:
        vert_pixel = int(fracs[0] * self.image.shape[0])
        horiz_pixel = int(fracs[1] * self.image.shape[1])
        return (vert_pixel, horiz_pixel)

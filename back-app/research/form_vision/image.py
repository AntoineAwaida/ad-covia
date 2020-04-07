import cv2
import numpy as np
from typing import Tuple, Dict

NormalizedCoords = Tuple[float, float]


class Image:
    def __init__(self, image_data: np.ndarray, name: str):
        self.image_data = image_data
        self.name = name

    @classmethod
    def from_file(cls, path: str, name: str = "image") -> "Image":
        return cls(cv2.imread(path), name)

    def resize(self, width: int, height: int = None) -> "Image":
        if height is None:
            aspect_ratio = self.shape[1] / self.shape[0]
            height = int(width / aspect_ratio)

        return Image(
            cv2.resize(self.image_data, (width, height), interpolation=cv2.INTER_LINEAR),
            f"{self.name} resized to ({width}x{height})",
        )

    def rotate(self, degrees_ccw: float) -> "Image":
        rows, cols, channels = self.shape
        M = cv2.getRotationMatrix2D(
            # not sure what this does if the rows are cols are not % 2 ?
            (cols / 2, rows / 2),
            degrees_ccw,
            1,
        )

        return Image(
            cv2.warpAffine(self.image_data, M, (cols, rows), borderValue=(255, 255, 255)),
            f"{self.name} rotated by {degrees_ccw} deg.",
        )

    def crop_to_aspect_ratio(self, aspect_ratio: float) -> "Image":
        ratios_ratio = aspect_ratio / self.aspect_ratio
        if ratios_ratio > 1.0:
            return self.crop(vert_frac=1 - 1 / ratios_ratio)
        elif ratios_ratio < 1.0:
            return self.crop(horiz_frac=1 - ratios_ratio)
        return self.crop()

    def crop(self, vert_frac: float = 0.0, horiz_frac: float = 0.0) -> "Image":
        start_vert, start_horiz = self._fraction_to_pixels((vert_frac / 2, horiz_frac / 2))
        end_vert, end_horiz = self._fraction_to_pixels((1 - vert_frac / 2, 1 - horiz_frac / 2))

        image = self.image_data[start_vert:end_vert, start_horiz:end_horiz]
        return Image(image, f"{self.name} cropped to ({image.shape[1]}x{image.shape[0]})")

    def select_subimages(
        self, coords_dict: Dict[str, Tuple[NormalizedCoords, NormalizedCoords]]
    ) -> Dict[str, "Image"]:
        return {k: self.select_subimage(*v) for k, v in coords_dict.items()}

    def select_subimage(
        self, top_left: NormalizedCoords, bottom_right: NormalizedCoords
    ) -> "Image":
        top_left_px = self._fraction_to_pixels(top_left)
        bot_right_px = self._fraction_to_pixels(bottom_right)
        return self[top_left_px[0] : bot_right_px[0], top_left_px[1] : bot_right_px[1]]

    @property
    def shape(self) -> Tuple:
        return self.image_data.shape

    @property
    def aspect_ratio(self) -> float:
        return self.shape[1] / self.shape[0]

    def show(self) -> None:
        cv2.imshow(self.name, self.image_data)
        cv2.waitKey(0)
        cv2.destroyWindow(self.name)

    def _fraction_to_pixels(self, fracs: NormalizedCoords) -> Tuple[int, int]:
        vert_pixel = int(fracs[0] * self.shape[0])
        horiz_pixel = int(fracs[1] * self.shape[1])
        return (vert_pixel, horiz_pixel)

    def __getitem__(self, item: int):
        return Image(self.image_data[item], self.name)

    def __str__(self) -> str:
        return str(self.image_data)

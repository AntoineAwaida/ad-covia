from typing import Tuple
from research.form_vision.image import Image


class ImageProcessor:
    def __init__(self, image: Image):
        self.image = image

    def select_subimage(
        self, top_left: Tuple[float, float], bottom_right: Tuple[float, float]
    ) -> Image:
        top_left_px = self._fraction_to_pixels(*top_left)
        bot_right_px = self._fraction_to_pixels(*bottom_right)
        return self.image[
            top_left_px[0] : bot_right_px[0], top_left_px[1] : bot_right_px[1]
        ]

    def _fraction_to_pixels(self, vert_frac, horiz_frac) -> Tuple[int, int]:
        vert_pixel = int(vert_frac * self.image.shape[0])
        horiz_pixel = int(horiz_frac * self.image.shape[1])
        return (vert_pixel, horiz_pixel)

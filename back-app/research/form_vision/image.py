import numpy as np
import cv2
from typing import Tuple


class Image:
    def __init__(self, image_data: np.ndarray, name: str):
        self._image = image_data
        self.name = name

    @classmethod
    def from_file(cls, path: str, name: str = "image") -> "Image":
        return cls(cv2.imread(path), name)

    @property
    def shape(self) -> Tuple:
        return self._image.shape

    def show(self) -> None:
        cv2.imshow(self.name, self._image)
        cv2.waitKey()

    def __getitem__(self, item: int):
        return Image(self._image[item], self.name)

    def __str__(self) -> str:
        return str(self._image)

from research.form_vision.image import Image
from research.form_vision.processor import ImageProcessor
from pathlib import Path

if __name__ == "__main__":

    DIRNAME = Path(__file__).parent

    path = f"{DIRNAME}/../../../resources/germaine.png"
    img = Image.from_file(path)
    proc = ImageProcessor(img)
    coords = {
        "lefty": ((0.35, 0.1), (0.4, 0.9)),
        "righty": ((0.4, 0.1), (0.45, 0.9)),
    }
    for img in proc.select_subimages(coords).values():
        img.show()

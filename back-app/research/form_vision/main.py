from research.form_vision.image import Image
from research.form_vision.template_matching import TemplateMatcher
from pathlib import Path

if __name__ == "__main__":

    DIRNAME = Path(__file__).parent

    path = f"{DIRNAME}/../../../resources/germaine.png"
    template_path = f"{DIRNAME}/../../../resources/thierry.png"
    template = Image.from_file(template_path, "template")
    matcher = TemplateMatcher(template, ((0.044, 0.28), (0.07, 0.72)))

    img = Image.from_file(path)
    matcher.match(img)

    coords = {
        "voyage hors de france": ((0.2, 0.56), (0.24, 0.7)),
        "tickboxes1": ((0.365, 0.785), (0.643, 0.885)),
    }

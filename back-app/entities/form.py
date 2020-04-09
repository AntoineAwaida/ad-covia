from sqlalchemy import Boolean, Column, Integer, String

from database import Base


class Form(Base):
    __tablename__ = "form"
    id = Column(Integer, primary_key=True)
    id_document = Column(Integer, unique=True, nullable=True)
    id_personne = Column(Integer, unique=True, nullable=True)
    male = Column(Boolean)
    age = Column(Integer)
    profession = Column(String(50))
    poids = Column(Integer)
    code_postal = Column(String(5))
    temperature = Column(Boolean)
    agueusie_anosmie = Column(Boolean)
    mal_gorge = Column(Boolean)
    douleur_musc = Column(Boolean)
    desequilibres = Column(Boolean)
    toux = Column(Boolean)
    ecoulement = Column(Boolean)
    fatigue = Column(Boolean)
    diff_resp = Column(Boolean)
    diarrhee = Column(Boolean)
    diab_1 = Column(Boolean)
    diab_2 = Column(Boolean)
    immuno = Column(Boolean)
    cancer = Column(Boolean)
    maladie_foie = Column(Boolean)
    hypertension = Column(Boolean)
    grossesse = Column(Boolean)
    traitement_immuno = Column(Boolean)
    maladie_resp = Column(Boolean)
    insuf_renale = Column(Boolean)
    contacts = Column(Boolean)
    lunettes = Column(Boolean)
    masque = Column(Boolean)
    transports = Column(Boolean)
    barbe = Column(Boolean)
    immeuble = Column(Boolean)
    jardin_ter = Column(Boolean)
    voyage = Column(Boolean)
    groupe_sang = Column(String(4))
    contacts_cov = Column(Integer)
    surface = Column(Integer)
    courses = Column(Integer)
    teletravail = Column(Integer)
    positif_covid = Column(Boolean)
    filename = Column(String(120))

    def __init__(self, form=None, filename=None):
        self.male = True if form["male"] == "1" else False
        self.age = form["age"]
        self.profession = form["profession"]
        self.poids = form["poids"]
        self.code_postal = form["code_postal"]
        self.temperature = True if form["temperature"] == "1" else False
        self.agueusie_anosmie = True if form["agueusie_anosmie"] == "1" else False
        self.mal_gorge = True if form["mal_gorge"] == "1" else False
        self.douleur_musc = True if form["douleur_musc"] == "1" else False
        self.desequilibres = True if form["desequilibres"] == "1" else False
        self.toux = True if form["toux"] == "1" else False
        self.ecoulement = True if form["ecoulement"] == "1" else False
        self.fatigue = True if form["fatigue"] == "1" else False
        self.diff_resp = True if form["diff_resp"] == "1" else False
        self.diarrhee = True if form["diarrhee"] == "1" else False
        self.diab_1 = True if form["diab_1"] == "1" else False
        self.diab_2 = True if form["diab_2"] == "1" else False
        self.immuno = True if form["immuno"] == "1" else False
        self.cancer = True if form["cancer"] == "1" else False
        self.maladie_foie = True if form["maladie_foie"] == "1" else False
        self.hypertension = True if form["hypertension"] == "1" else False
        self.grossesse = True if form["grossesse"] == "1" else False
        self.traitement_immuno = True if form["traitement_immuno"] == "1" else False
        self.maladie_resp = True if form["maladie_resp"] == "1" else False
        self.insuf_renale = True if form["insuf_renale"] == "1" else False
        self.contacts = True if form["contacts"] == "1" else False
        self.lunettes = True if form["lunettes"] == "1" else False
        self.masque = True if form["masque"] == "1" else False
        self.transports = True if form["transports"] == "1" else False
        self.barbe = True if form["barbe"] == "1" else False
        self.immeuble = True if form["immeuble"] == "1" else False
        self.jardin_ter = True if form["jardin_ter"] == "1" else False
        self.voyage = True if form["voyage"] == "1" else False
        self.groupe_sang = form["groupe_sang"]
        self.contacts_cov = form["contacts_cov"]
        self.surface = form["surface"]
        self.courses = form["courses"]
        self.teletravail = form["teletravail"]
        self.positif_covid = True if form["positif_covid"] == "1" else False
        self.filename = filename

    def __repr__(self):
        return "<Form %r>" % (self.id_document)

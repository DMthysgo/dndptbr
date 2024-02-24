const mongoose = require("mongoose");

const fichaSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  nome: {
    type: String,
  },
  especie: {
    type: String,
  },
  subespecie: {
    type: String,
  },
  classe: {
    type: String,
  },
  subclasse: {
    type: String,
  },
  experiencia: {
    type: Number,
  },
  inspiracao: {
    type: Number,
  },
  alinhamento: {
    type: String,
  },
  deslocamentoVoo: {
    type: String,
  },
  forca: {
    type: Number,
  },
  destreza: {
    type: Number,
  },
  constituicao: {
    type: Number,
  },
  inteligencia: {
    type: Number,
  },
  sabedoria: {
    type: Number,
  },
  carisma: {
    type: Number,
  },
  profAtletismo: {
    type: String,
  },
  profAcrobacia: {
    type: String,
  },
  profFurtividade: {
    type: String,
  },
  profprestidigitacao: {
    type: String,
  },
  profArcanismo: {
    type: String,
  },
  profHistoria: {
    type: String,
  },
  profInvestigacao: {
    type: String,
  },
  profNatureza: {
    type: String,
  },
  profReligiao: {
    type: String,
  },
  profIntuicao: {
    type: String,
  },
  profAnimais: {
    type: String,
  },
  profMedicina: {
    type: String,
  },
  profPercepcao: {
    type: String,
  },
  profSobrevivencia: {
    type: String,
  },
  profAtuacao: {
    type: String,
  },
  profManipulacao: {
    type: String,
  },
  profIntimidacao: {
    type: String,
  },
  profPersuasao: {
    type: String,
  },
  profIdiomaComum: {
    type: Boolean,
  },
  profIdiomaAnao: {
    type: Boolean,
  },
  profIdiomaElfico: {
    type: Boolean,
  },
  profIdiomaGigante: {
    type: Boolean,
  },
  profIdiomaGnomico: {
    type: Boolean,
  },
  profIdiomaGoblin: {
    type: Boolean,
  },
  profIdiomaHalfling: {
    type: Boolean,
  },
  profIdiomaOrc: {
    type: Boolean,
  },
  profIdiomaAbissal: {
    type: Boolean,
  },
  profIdiomaCelestial: {
    type: Boolean,
  },
  profIdiomaSubterraneo: {
    type: Boolean,
  },
  profIdiomaDraconici: {
    type: Boolean,
  },
  profIdiomaInfernal: {
    type: Boolean,
  },
  profIdiomaPrimordial: {
    type: Boolean,
  },
  profIdiomaSilvestre: {
    type: Boolean,
  },
  profIdiomaSubcomum: {
    type: Boolean,
  },
  profItensArmaduraLeve: {
    type: Boolean,
  },
  profItensArmaduraMedia: {
    type: Boolean,
  },
  profItensArmaduraPesada: {
    type: Boolean,
  },
  profItensArmaSimplesCAC: {
    type: Boolean,
  },
  profItensArmaSimplesAD: {
    type: Boolean,
  },
  profItensArmaMarcialCAC: {
    type: Boolean,
  },
  profItensArmaMarcialAD: {
    type: Boolean,
  },
  profItensInstrumentos: {
    type: Boolean,
  },
  profItensDisfarce: {
    type: Boolean,
  },
  profItensFalsificacao: {
    type: Boolean,
  },
  profItensHerbalismo: {
    type: Boolean,
  },
  profItensVeneno: {
    type: Boolean,
  },
  profItensBaralho: {
    type: Boolean,
  },
  profItensDados: {
    type: Boolean,
  },
  profItensXadrez: {
    type: Boolean,
  },
  profItensLadrao: {
    type: Boolean,
  },
  profItensNavegacao: {
    type: Boolean,
  },
  profItensOutros: {
    type: String,
  },
  antecedentes: {
    type: String,
  },
  personalidade: {
    type: String,
  },
  ideais: {
    type: String,
  },
  vinculos: {
    type: String,
  },
  defeitos: {
    type: String,
  },
  genero: {
    type: String,
  },
  idade: {
    type: String,
  },
  tamanho: {
    type: String,
  },
  massa: {
    type: String,
  },
  pele: {
    type: String,
  },
  olhos: {
    type: String,
  },
  cabelo: {
    type: String,
  },
  tattoo: {
    type: String,
  },
  barba: {
    type: String,
  },
  deficiencia: {
    type: String,
  },
  aparenciaDescricao: {
    type: String,
  },
  caracteristicas: {
    type: String,
  },
  habilidades: {
    type: String,
  },
  caBase: {
    type: Number,
  },
  caHabilidade: {
    type: String,
  },
  caBonus: {
    type: Number,
  },
  armadura: {
    type: String,
  },
  escudo: {
    type: String,
  },
  pvTemp: {
    type: String,
  },
  pvAtual: {
    type: String,
  },
  pvTotal: {
    type: String,
  },
  testeMorteSucesso1: {
    type: Boolean,
  },
  testeMorteSucesso2: {
    type: Boolean,
  },
  testeMorteSucesso3: {
    type: Boolean,
  },
  testeMorteFalha1: {
    type: Boolean,
  },
  testeMorteFalha2: {
    type: Boolean,
  },
  testeMorteFalha3: {
    type: Boolean,
  },
  armas: {
    type: Array,
  },
  bonusExtraAtaque: {
    type: Array,
  },
  armaHabilidade: {
    type: Array,
  },
  armaProf: {
    type: Array,
  },
  armaDescricao: {
    type: Array,
  },
  itensMagicos: {
    type: String,
  },
  municaoNome: {
    type: String,
  },
  municaoQuantidade: {
    type: Number,
  },
  pecasCobre: {
    type: Number,
  },
  pecasPrata: {
    type: Number,
  },
  pecasElectro: {
    type: Number,
  },
  pecasOuro: {
    type: Number,
  },
  pecasPlatina: {
    type: Number,
  },
  itemNome: {
    type: Array,
  },
  itemMassa: {
    type: Array,
  },
  itemQuantidade: {
    type: Array,
  },
  petNome: {
    type: Array,
  },
  petEspecie: {
    type: Array,
  },
  petCA: {
    type: Array,
  },
  petPVatual: {
    type: Array,
  },
  petPVmax: {
    type: Array,
  },
  petDeslocamento: {
    type: Array,
  },
  petForca: {
    type: Array,
  },
  petDestreza: {
    type: Array,
  },
  petConstituicao: {
    type: Array,
  },
  petInteligencia: {
    type: Array,
  },
  petSabedoria: {
    type: Array,
  },
  petCarisma: {
    type: Array,
  },
  petDescricao: {
    type: Array,
  },
  riquezas: {
    type: String,
  },
  magiaHabilidade: {
    type: String,
  },
  magiaCD: {
    type: Number,
  },
  magiaBonus: {
    type: Number,
  },
  magiaPreparada: {
    type: Number,
  },
  espacoMagia0atual: {
    type: Number,
  },
  espacoMagia1atual: {
    type: Number,
  },
  espacoMagia2atual: {
    type: Number,
  },
  espacoMagia3atual: {
    type: Number,
  },
  espacoMagia4atual: {
    type: Number,
  },
  espacoMagia5atual: {
    type: Number,
  },
  espacoMagia6atual: {
    type: Number,
  },
  espacoMagia7atual: {
    type: Number,
  },
  espacoMagia8atual: {
    type: Number,
  },
  espacoMagia9atual: {
    type: Number,
  },
  espacoMagia1total: {
    type: Number,
  },
  espacoMagia2total: {
    type: Number,
  },
  espacoMagia3total: {
    type: Number,
  },
  espacoMagia4total: {
    type: Number,
  },
  espacoMagia5total: {
    type: Number,
  },
  espacoMagia6total: {
    type: Number,
  },
  espacoMagia7total: {
    type: Number,
  },
  espacoMagia8total: {
    type: Number,
  },
  espacoMagia9total: {
    type: Number,
  },
  listaMagiaPreparada: {
    type: Array,
  },
  listaMagiaNivel: {
    type: Array,
  },
  listaMagiaNome: {
    type: Array,
  },
  listaMagiaTempo: {
    type: Array,
  },
  listaMagiaDistancia: {
    type: Array,
  },
  listaMagiaComponentes: {
    type: Array,
  },
  listaMagiaDuracao: {
    type: Array,
  },
  listaMagiaRital: {
    type: Array,
  },
  listaMagiaConcentracao: {
    type: Array,
  },
  listaMagiaReferencia: {
    type: Array,
  },
  listaMagiaEscola: {
    type: Array,
  },
  listaMagiaMateriais: {
    type: Array,
  },
  listaMagiaDescricao: {
    type: Array,
  },
  contatos: {
    type: String,
  },
  anotacoes: {
    type: String,
  },
});

const fichaModel = mongoose.model("ficha", fichaSchema);

module.exports = fichaModel;

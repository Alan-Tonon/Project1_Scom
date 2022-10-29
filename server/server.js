const express =  require('express')
const path = require('path');
const app = express()
const port = 5000
const fs = require('fs')

fs.readFile('loren_epsun.txt', 'utf8',(err, data)=>
{
    if(err){
        console.log(err)
        return;
    }
    string_data = data
})

let demacia = `Demacia é um reino altivo e legítimo com 
uma prestigiosa história militar. 
Fundada após as Guerras Rúnicas para ser um local livre de qualquer magia, 
alguns sugerem que a era dourada de Demacia já passou, a menos que a cidade se 
mostre capaz de se adaptar ao novo mundo. Autossuficiente e agrária, sua sociedade 
é inerentemente defensiva e insular, valorizando a justiça, a honra e o dever acima 
de tudo.`;

let freljord = `Freljord é uma terra hostil e impiedosa, onde os semideuses caminham 
entre as pessoas, e os indivíduos já nascem guerreiros. Apesar da abundância de tribos 
independentes, as três maiores são a Avarosianos, a Garra do Inverno e a Praeglacius, cada 
uma moldada única e exclusivamente pela vontade de sobreviver. Lá é também o único lugar em 
toda a Runeterra onde o Gelo Verdadeiro pode ser encontrado.`;

let noxus = `Noxus é um império expansionista brutal; entretanto, aqueles que conseguem 
enxergar além de seu exterior bélico encontram uma sociedade excepcionalmente inclusiva. 
Qualquer um pode conquistar uma posição de poder e respeito se demonstrar a aptidão necessária, 
independentemente de classe social, antecedentes ou riquezas. Os noxianos valorizam a força acima 
de tudo, apesar dela poder ser manifestada de várias formas diferentes.`;

let ionia = `Conhecida como as Primeiras Terras, Ionia é um ilha-continente dotada de beleza 
natural e magia. Seus habitantes, que vivem em províncias livremente agrupadas, são um povo 
espiritual sempre em busca de harmonia com o mundo. Eles se mantinham predominantemente neutros 
até que suas terras foram invadidas por Noxus. Essa brutal ocupação forçou Ionia a reavaliar seu 
lugar no mundo, e seu futuro permanece indeterminado.`;

let piltover = `Dupla de Cidades-Estado que controlam a maior parte das rotas de comércio 
entre Valoran e Shurima. Lar de inventores visionários e de seus ricos patrocinadores, 
onde a desigualdade social vem se tornando cada vez mais perigosa.`;

let agua = `Águas de Sentina é uma cidade de porto como nenhuma outra, lar de caçadores de 
monstros, gangues portuárias, população indígena e comerciantes do mundo todo. Quase tudo 
pode ser comprado aqui, desde tecnologia Hextec contrabandeada até favores de senhores do 
crime local. Não existe lugar melhor para alcançar fama e fortuna, embora a morte esteja à 
espreita em cada beco e a lei seja praticamente inexistente.`;

let ixtal = `Isolada na selva a leste de Shurima, a sofisticada cidade arcológica de 
Ixaocan permanece praticamente livre de influências externas. Tendo testemunhado de longe a 
ruína das Ilhas das Bênçãos e o abrandamento da cultura Buhru, os ixtalenses veem as outras 
facções de Runeterra como meras novatas e impostoras, e usam sua poderosa magia elemental para 
afastar qualquer intruso.`;

let targon = `Região montanhosa e escassamente habitada a oeste de Shurima, o Targon é o pico mais
 alto de toda Runeterra. Afastado da civilização, o Monte Targon é praticamente inalcançável, 
 e só aqueles peregrinos com profundo desejo e intensa determinação conseguem chegar ao topo. 
 Os poucos que conseguem sobreviver à escalada voltam atormentados, vazios por dentro ou 
 transformados a ponto de não serem mais reconhecidos.`;

let shurima = `Shurima já foi uma civilização próspera que ocupava grande parte do continente do 
sul, mas foi deixada em ruínas após a queda de seu deus-imperador. Por milênios, contos de sua 
antiga glória se tornaram mitos e rituais. Agora, seus habitantes nômades ganham a vida a muito 
custo nos desertos ou recorrem ao trabalho mercenário. Ainda assim, alguns ousam sonhar com o 
retorno de seu antigo estilo de vida.`;

let sombras = `A Ilhas das Sombras já foi um belo reino, bem antes de ser devastado por um 
cataclisma mágico. Agora, a Névoa Negra cobre permanentemente o solo, manchando e corrompendo 
tudo com sua feitiçaria maligna. Aqueles que perecem sob seu efeito ficam condenados a fazer 
parte da Névoa Negra por toda a eternidade… e pior ainda, a cada ano ela estende seu alcance 
para ceifar ainda mais almas em Runeterra.`;


app.use(express.static('public'));

app.get('/Dystopia', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Dystopia.mp3"));
})

app.get('/Enemy', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Enemy.mp3"));
})

app.get('/Playground', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Playground.mp3"));
})

app.get('/api', (req, res) => {
  res.json({
    "text": string_data,
    "freljord":freljord,
    "demacia":  demacia,
    "noxus": noxus,
    "ionia": ionia,
    "piltover": piltover,
    "agua": agua,
    "ixtal": ixtal,
    "targon": targon,
    "shurima":shurima,
    "sombras": sombras
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
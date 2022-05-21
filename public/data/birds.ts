import { BirdHeight } from "../../model/enums/BirdHeight";
import { Bird } from "../../model/types";

export const birds: Bird[] = [
  {
    id: 1,
    name: "Vrabec domácí",
    latin: "Passer domesticus",
    description:
      "Vrabec domácí je malý zástupce čeledi vrabcovitých a nejrozšířenější žijící pták na světě, vyskytující se na velkém území Eurasie a uměle vysazený v Americe, subsaharské Africe, Austrálii a na Novém Zélandu. Pochází pravděpodobně z Malé Asie nebo Arabského poloostrova a do Evropy se dostal již před tisíci lety.",
    family: "vrabcovití",
    colours: ["grey", "brown", "white", "black"],
    height: BirdHeight.SMALL,
    image: "/images/img-birds/vrabec.jpg",
    audio: "/audio/vrabec-domaci.flac",
    feed: ["seeds", "plants", "fruits"],
    slug: "vrabec-domaci",
  },
  {
    id: 2,
    name: "Vrabec polní",
    latin: "Passer montanus",
    description:
      "Vrabec polní má velice širokou oblast výskytu, od Irska na západě přes celou Evropu a střední Asii až do Japonska a Indonésie. Od domácího vrabce se liší poněkud menší velikostí a zbarvením. Nápadná je u něho zejména kresba hlavy - temeno je celé červenohnědé a na bílých tvářích je výrazná okrouhlá černá skvrna. Od vrabce domácího se liší také hlasem. Ten je slabší, jemnější, a to jak vábení, tak i zpěv, který je jakousi směsicí různých tónů.",
    family: "vrabcovití",
    colours: ["light-yellow", "brown", "black", "grey", "white"],
    height: BirdHeight.TINY,
    image: "/images/img-birds/vrabec-polni.jpg",
    audio: "/audio/vrabec-polni.flac",
    feed: ["seeds", "plants"],
    slug: "vrabec-polni",
  },
  {
    id: 3,
    name: "Zvonek zelený",
    latin: "Chloris chloris",
    description:
      "Je velký přibližně jako vrabec. Má podsadité tělo, velkou hlavu a silný kuželovitý zobák, který je slonovinově zbarvený a díky pokleslým koutkům a tmavšímu opeření okolo kořene zobáku a očí budí výraz věčné nakvašenosti. Při příznivém počasí začínají samečkové zpívat již v lednu nebo počátkem února. Většinou to není zpěv úplný, spíše počátky zpěvu, ale během března se rozezpívají všichni a zpívají naplno.",
    family: "pěnkavovití",
    colours: ["light-yellow", "brown", "black", "grey", "white"],
    height: BirdHeight.SMALL,
    image: "/images/img-birds/zvonek.jpg",
    audio: "/audio/zvonek.mp3",
    feed: ["seeds", "plants"],
    slug: "zvonek-zeleny",
  },
];

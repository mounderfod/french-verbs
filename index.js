function verbinate() {
  var checkedBoxes = document.querySelectorAll("input:checked");
  var select = document.getElementById("tense");
  console.log(select.value);
  let verbs = [];
  checkedBoxes.forEach((box) => {
    verbs.push(box.id);
  });
  console.log(verbs);
  createConjugationGrid(verbs, select.value);
}

const verbsData = {
  parler: {
    pres: ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
    fut: [
      "parlerai",
      "parleras",
      "parlera",
      "parlerons",
      "parlerez",
      "parleront",
    ],
    con: [
      "parlerais",
      "parlerais",
      "parlerait",
      "parlerions",
      "parleriez",
      "parleraient",
    ],
    perf: [
      "ai parlé",
      "as parlé",
      "a parlé",
      "avons parlé",
      "avez parlé",
      "ont parlé",
    ],
    imperf: [
      "parlais",
      "parlais",
      "parlait",
      "parlions",
      "parliez",
      "parlaient",
    ],
    sub: ["parle", "parles", "parle", "parlions", "parliez", "parlent"],
  },
  vendre: {
    pres: ["vends", "vends", "vend", "vendons", "vendez", "vendent"],
    fut: ["vendrai", "vendras", "vendra", "vendrons", "vendrez", "vendront"],
    con: [
      "vendrais",
      "vendrais",
      "vendrait",
      "vendrions",
      "vendriez",
      "vendraient",
    ],
    perf: [
      "ai vendu",
      "as vendu",
      "a vendu",
      "avons vendu",
      "avez vendu",
      "ont vendu",
    ],
    imperf: [
      "vendais",
      "vendais",
      "vendait",
      "vendions",
      "vendiez",
      "vendaient",
    ],
    sub: ["vende", "vendes", "vende", "vendions", "vendiez", "vendent"],
  },
  finir: {
    pres: ["finis", "finis", "finit", "finissons", "finissez", "finissent"],
    fut: ["finirai", "finiras", "finira", "finirons", "finirez", "finiront"],
    con: [
      "finirais",
      "finirais",
      "finirait",
      "finirions",
      "finiriez",
      "finiraient",
    ],
    perf: [
      "ai fini",
      "as fini",
      "a fini",
      "avons fini",
      "avez fini",
      "ont fini",
    ],
    imperf: [
      "finissais",
      "finissais",
      "finissait",
      "finissions",
      "finissiez",
      "finissaient",
    ],
    sub: [
      "finisse",
      "finisses",
      "finisse",
      "finissions",
      "finissiez",
      "finissent",
    ],
  },
  aller: {
    pres: ["vais", "vas", "va", "allons", "allez", "vont"],
    fut: ["irai", "iras", "ira", "irons", "irez", "iront"],
    con: ["irais", "irais", "irait", "irions", "iriez", "iraient"],
    perf: [
      "suis allé",
      "es allé",
      "est allé",
      "sommes allés",
      "êtes allés",
      "sont allés",
    ],
    imperf: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
    sub: ["aille", "ailles", "aille", "allions", "alliez", "aillent"],
  },
  "s'asseoir": {
    pres: [
      "m'assieds",
      "t'assieds",
      "s'assied",
      "nous asseyons",
      "vous asseyez",
      "s'asseyent",
    ],
    fut: [
      "assiérai",
      "assiéras",
      "assiéra",
      "assiérons",
      "assiérez",
      "assiéront",
    ],
    con: [
      "assiérais",
      "assiérais",
      "assiérait",
      "assiérions",
      "assiériez",
      "assiéraient",
    ],
    perf: [
      "me suis assis",
      "t'es assis",
      "s'est assis",
      "nous sommes assis",
      "vous êtes assis",
      "se sont assis",
    ],
    imperf: [
      "m'asseyais",
      "t'asseyais",
      "s'asseyait",
      "nous asseyions",
      "vous asseyiez",
      "s'asseyaient",
    ],
    sub: [
      "m'asseye",
      "t'asseyes",
      "s'asseye",
      "nous asseyions",
      "vous asseyiez",
      "s'asseyent",
    ],
  },
  avoir: {
    pres: ["ai", "as", "a", "avons", "avez", "ont"],
    fut: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
    con: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
    perf: ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
    imperf: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
    sub: ["aie", "aies", "ait", "ayons", "ayez", "aient"],
  },
  battre: {
    pres: ["bats", "bats", "bat", "battons", "battez", "battent"],
    fut: ["battrai", "battras", "battra", "battrons", "battrez", "battront"],
    con: [
      "battrais",
      "battrais",
      "battrait",
      "battrions",
      "battriez",
      "battraient",
    ],
    perf: [
      "ai battu",
      "as battu",
      "a battu",
      "avons battu",
      "avez battu",
      "ont battu",
    ],
    imperf: [
      "battais",
      "battais",
      "battait",
      "battions",
      "battiez",
      "battaient",
    ],
    sub: ["batte", "battes", "batte", "battions", "battiez", "battent"],
  },
  boire: {
    pres: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
    fut: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
    con: ["boirais", "boirais", "boirait", "boirions", "boiriez", "boiraient"],
    perf: ["ai bu", "as bu", "a bu", "avons bu", "avez bu", "ont bu"],
    imperf: ["buvais", "buvais", "buvait", "buvions", "buviez", "buvaient"],
    sub: ["boive", "boives", "boive", "buvions", "buviez", "boivent"],
  },
  conduire: {
    pres: [
      "conduis",
      "conduis",
      "conduit",
      "conduisons",
      "conduisez",
      "conduisent",
    ],
    fut: [
      "conduirai",
      "conduiras",
      "conduira",
      "conduirons",
      "conduirez",
      "conduiront",
    ],
    con: [
      "conduirais",
      "conduirais",
      "conduirait",
      "conduirions",
      "conduiriez",
      "conduiraient",
    ],
    perf: [
      "ai conduit",
      "as conduit",
      "a conduit",
      "avons conduit",
      "avez conduit",
      "ont conduit",
    ],
    imperf: [
      "conduisais",
      "conduisais",
      "conduisait",
      "conduisions",
      "conduisiez",
      "conduisaient",
    ],
    sub: [
      "conduise",
      "conduises",
      "conduise",
      "conduisions",
      "conduisiez",
      "conduisent",
    ],
  },
  connaitre: {
    pres: [
      "connais",
      "connais",
      "connaît",
      "connaissons",
      "connaissez",
      "connaissent",
    ],
    fut: [
      "connaîtrai",
      "connaîtras",
      "connaîtra",
      "connaîtrons",
      "connaîtrez",
      "connaîtront",
    ],
    con: [
      "connaîtrais",
      "connaîtrais",
      "connaîtrait",
      "connaîtrions",
      "connaîtriez",
      "connaîtraient",
    ],
    perf: [
      "ai connu",
      "as connu",
      "a connu",
      "avons connu",
      "avez connu",
      "ont connu",
    ],
    imperf: [
      "connaissais",
      "connaissais",
      "connaissait",
      "connaissions",
      "connaissiez",
      "connaissaient",
    ],
    sub: [
      "connaisse",
      "connaisses",
      "connaisse",
      "connaissions",
      "connaissiez",
      "connaissent",
    ],
  },
  courir: {
    pres: ["cours", "cours", "court", "courons", "courez", "courent"],
    fut: ["courrai", "courras", "courra", "courrons", "courrez", "courront"],
    con: [
      "courrais",
      "courrais",
      "courrait",
      "courrions",
      "courriez",
      "courraient",
    ],
    perf: [
      "ai couru",
      "as couru",
      "a couru",
      "avons couru",
      "avez couru",
      "ont couru",
    ],
    imperf: [
      "courais",
      "courais",
      "courait",
      "courions",
      "couriez",
      "couraient",
    ],
    sub: ["coures", "courons", "courez", "courent"],
  },
  croire: {
    pres: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
    fut: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
    con: [
      "croirais",
      "croirais",
      "croirait",
      "croirions",
      "croiriez",
      "croiraient",
    ],
    perf: ["ai cru", "as cru", "a cru", "avons cru", "avez cru", "ont cru"],
    imperf: [
      "croyais",
      "croyais",
      "croyait",
      "croyions",
      "croyiez",
      "croyaient",
    ],
    sub: ["croie", "croies", "croie", "croyions", "croyiez", "croient"],
  },
  dire: {
    pres: ["dis", "dis", "dit", "disons", "dites", "disent"],
    fut: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
    con: ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"],
    perf: ["ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],
    imperf: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
    sub: ["dise", "dises", "dise", "disions", "disiez", "disent"],
  },
  dormir: {
    pres: ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
    fut: [
      "dormirai",
      "dormiras",
      "dormira",
      "dormirons",
      "dormirez",
      "dormiront",
    ],
    con: [
      "dormirais",
      "dormirais",
      "dormirait",
      "dormirions",
      "dormiriez",
      "dormiraient",
    ],
    perf: [
      "ai dormi",
      "as dormi",
      "a dormi",
      "avons dormi",
      "avez dormi",
      "ont dormi",
    ],
    imperf: [
      "dormais",
      "dormais",
      "dormait",
      "dormions",
      "dormiez",
      "dormaient",
    ],
    sub: ["dorme", "dormes", "dorme", "dormions", "dormiez", "dorment"],
  },
  ecrire: {
    pres: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
    fut: ["écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
    con: [
      "écrirais",
      "écrirais",
      "écrirait",
      "écririons",
      "écririez",
      "écriraient",
    ],
    perf: [
      "ai écrit",
      "as écrit",
      "a écrit",
      "avons écrit",
      "avez écrit",
      "ont écrit",
    ],
    imperf: [
      "écrivais",
      "écrivais",
      "écrivait",
      "écrivions",
      "écriviez",
      "écrivaient",
    ],
    sub: ["écrive", "écrives", "écrive", "écrivions", "écriviez", "écrivent"],
  },
  envoyer: {
    pres: ["envoie", "envoies", "envoie", "envoyons", "envoyez", "envoient"],
    fut: [
      "enverrai",
      "enverras",
      "enverra",
      "enverrons",
      "enverrez",
      "enverront",
    ],
    con: [
      "enverrais",
      "enverrais",
      "enverrait",
      "enverrions",
      "enverriez",
      "enverraient",
    ],
    perf: [
      "ai envoyé",
      "as envoyé",
      "a envoyé",
      "avons envoyé",
      "avez envoyé",
      "ont envoyé",
    ],
    imperf: [
      "envoyais",
      "envoyais",
      "envoyait",
      "envoyions",
      "envoyiez",
      "envoyaient",
    ],
    sub: ["envoie", "envoies", "envoie", "envoyions", "envoyiez", "envoient"],
  },
  etre: {
    pres: ["suis", "es", "est", "sommes", "êtes", "sont"],
    fut: ["serai", "seras", "sera", "serons", "serez", "seront"],
    con: ["serais", "serais", "serait", "serions", "seriez", "seraient"],
    perf: ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
    imperf: ["étais", "étais", "était", "étions", "étiez", "étaient"],
    sub: ["sois", "sois", "soit", "soyons", "soyez", "soient"],
  },
  faire: {
    pres: ["fais", "fais", "fait", "faisons", "faites", "font"],
    fut: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
    con: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"],
    perf: [
      "ai fait",
      "as fait",
      "a fait",
      "avons fait",
      "avez fait",
      "ont fait",
    ],
    imperf: [
      "faisais",
      "faisais",
      "faisait",
      "faisions",
      "faisiez",
      "faisaient",
    ],
    sub: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"],
  },
  falloir: {
    pres: ["faut"],
    fut: ["faudra"],
    con: ["faudrait"],
    perf: ["a fallu"],
    imperf: ["fallait"],
    sub: ["faille"],
  },
  lire: {
    pres: ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
    fut: ["lirai", "liras", "lira", "lirons", "lirez", "liront"],
    con: ["lirais", "lirais", "lirait", "lirions", "liriez", "liraient"],
    perf: ["ai lu", "as lu", "a lu", "avons lu", "avez lu", "ont lu"],
    imperf: ["lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
    sub: ["lise", "lises", "lise", "lisions", "lisiez", "lisent"],
  },
  mettre: {
    pres: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
    fut: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
    con: [
      "mettrais",
      "mettrais",
      "mettrait",
      "mettrions",
      "mettriez",
      "mettraient",
    ],
    perf: ["ai mis", "as mis", "a mis", "avons mis", "avez mis", "ont mis"],
    imperf: [
      "mettais",
      "mettais",
      "mettait",
      "mettions",
      "mettiez",
      "mettaient",
    ],
    sub: ["mette", "mettes", "mette", "mettions", "mettiez", "mettent"],
  },
  mourir: {
    pres: ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
    fut: ["mourrai", "mourras", "mourra", "mourrons", "mourrez", "mourront"],
    con: [
      "mourrais",
      "mourrais",
      "mourrait",
      "mourrions",
      "mourriez",
      "mourraient",
    ],
    perf: [
      "suis mort",
      "es mort",
      "est mort",
      "sommes morts",
      "êtes morts",
      "sont morts",
    ],
    imperf: [
      "mourais",
      "mourais",
      "mourait",
      "mourions",
      "mouriez",
      "mouraient",
    ],
    sub: ["meure", "meures", "meure", "mourions", "mouriez", "meurent"],
  },
  ouvrir: {
    pres: ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
    fut: [
      "ouvrirai",
      "ouvriras",
      "ouvrira",
      "ouvrirons",
      "ouvrirez",
      "ouvriront",
    ],
    con: [
      "ouvrirais",
      "ouvrirais",
      "ouvrirait",
      "ouvririons",
      "ouvririez",
      "ouvriraient",
    ],
    perf: [
      "ai ouvert",
      "as ouvert",
      "a ouvert",
      "avons ouvert",
      "avez ouvert",
      "ont ouvert",
    ],
    imperf: [
      "ouvrais",
      "ouvrais",
      "ouvrait",
      "ouvrions",
      "ouvriez",
      "ouvraient",
    ],
    sub: ["ouvre", "ouvres", "ouvre", "ouvrions", "ouvriez", "ouvrent"],
  },
  partir: {
    pres: ["pars", "pars", "part", "partons", "partez", "partent"],
    fut: [
      "partirai",
      "partiras",
      "partira",
      "partirons",
      "partirez",
      "partiront",
    ],
    con: [
      "partirais",
      "partirais",
      "partirait",
      "partirions",
      "partiriez",
      "partiraient",
    ],
    perf: [
      "suis parti",
      "es parti",
      "est parti",
      "sommes partis",
      "êtes partis",
      "sont partis",
    ],
    imperf: [
      "partais",
      "partais",
      "partait",
      "partions",
      "partiez",
      "partaient",
    ],
    sub: ["parte", "partes", "parte", "partions", "partiez", "partent"],
  },
  pleuvoir: {
    pres: ["pleut"],
    fut: ["pleuvra"],
    con: ["pleuvrait"],
    perf: ["a plu"],
    imperf: ["pleuvait"],
    sub: ["pleuve"],
  },
  pouvoir: {
    pres: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
    fut: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
    con: [
      "pourrais",
      "pourrais",
      "pourrait",
      "pourrions",
      "pourriez",
      "pourraient",
    ],
    perf: ["ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],
    imperf: [
      "pouvais",
      "pouvais",
      "pouvait",
      "pouvions",
      "pouviez",
      "pouvaient",
    ],
    sub: ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"],
  },
  prendre: {
    pres: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
    fut: [
      "prendrai",
      "prendras",
      "prendra",
      "prendrons",
      "prendrez",
      "prendront",
    ],
    con: [
      "prendrais",
      "prendrais",
      "prendrait",
      "prendrions",
      "prendriez",
      "prendraient",
    ],
    perf: [
      "ai pris",
      "as pris",
      "a pris",
      "avons pris",
      "avez pris",
      "ont pris",
    ],
    imperf: [
      "prenais",
      "prenais",
      "prenait",
      "prenions",
      "preniez",
      "prenaient",
    ],
    sub: ["prenne", "prennes", "prenne", "prenions", "preniez", "prennent"],
  },
  recevoir: {
    pres: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
    fut: [
      "recevrai",
      "recevras",
      "recevra",
      "recevrons",
      "recevrez",
      "recevront",
    ],
    con: [
      "recevrais",
      "recevrais",
      "recevrait",
      "recevrions",
      "recevriez",
      "recevraient",
    ],
    perf: [
      "ai reçu",
      "as reçu",
      "a reçu",
      "avons reçu",
      "avez reçu",
      "ont reçu",
    ],
    imperf: [
      "recevais",
      "recevais",
      "recevait",
      "recevions",
      "receviez",
      "recevaient",
    ],
    sub: [
      "reçoive",
      "reçoives",
      "reçoive",
      "recevions",
      "receviez",
      "reçoivent",
    ],
  },
  rire: {
    pres: ["ris", "ris", "rit", "rions", "riez", "rient"],
    fut: ["rirai", "riras", "rira", "rirons", "rirez", "riront"],
    con: ["rirais", "rirais", "rirait", "ririons", "ririez", "riraient"],
    perf: ["ai ri", "as ri", "a ri", "avons ri", "avez ri", "ont ri"],
    imperf: ["riais", "riais", "riait", "riions", "riiez", "riaient"],
    sub: ["rie", "ries", "rie", "riions", "riiez", "rient"],
  },
  savoir: {
    pres: ["sais", "sais", "sait", "savons", "savez", "savent"],
    fut: ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
    con: ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"],
    perf: ["ai su", "as su", "a su", "avons su", "avez su", "ont su"],
    imperf: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
    sub: ["sache", "saches", "sache", "sachions", "sachiez", "sachent"],
  },
  sortir: {
    pres: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
    fut: [
      "sortirai",
      "sortiras",
      "sortira",
      "sortirons",
      "sortirez",
      "sortiront",
    ],
    con: [
      "sortirais",
      "sortirais",
      "sortirait",
      "sortirions",
      "sortiriez",
      "sortiraient",
    ],
    perf: [
      "suis sorti",
      "es sorti",
      "est sorti",
      "sommes sortis",
      "êtes sortis",
      "sont sortis",
    ],
    imperf: [
      "sortais",
      "sortais",
      "sortait",
      "sortions",
      "sortiez",
      "sortaient",
    ],
    sub: ["sorte", "sortes", "sorte", "sortions", "sortiez", "sortent"],
  },
  suivre: {
    pres: ["suis", "suis", "suit", "suivons", "suivez", "suivent"],
    fut: ["suivrai", "suivras", "suivra", "suivrons", "suivrez", "suivront"],
    con: [
      "suivrais",
      "suivrais",
      "suivrait",
      "suivrions",
      "suivriez",
      "suivraient",
    ],
    perf: [
      "ai suivi",
      "as suivi",
      "a suivi",
      "avons suivi",
      "avez suivi",
      "ont suivi",
    ],
    imperf: [
      "suivais",
      "suivais",
      "suivait",
      "suivions",
      "suiviez",
      "suivaient",
    ],
    sub: ["suive", "suives", "suive", "suivions", "suiviez", "suivent"],
  },
  tenir: {
    pres: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
    fut: [
      "tiendrai",
      "tiendras",
      "tiendra",
      "tiendrons",
      "tiendrez",
      "tiendront",
    ],
    con: [
      "tiendrais",
      "tiendrais",
      "tiendrait",
      "tiendrions",
      "tiendriez",
      "tiendraient",
    ],
    perf: [
      "ai tenu",
      "as tenu",
      "a tenu",
      "avons tenu",
      "avez tenu",
      "ont tenu",
    ],
    imperf: ["tenais", "tenais", "tenait", "tenions", "teniez", "tenaient"],
    sub: ["tienne", "tiennes", "tienne", "tenions", "teniez", "tiennent"],
  },
  venir: {
    pres: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    fut: [
      "viendrai",
      "viendras",
      "viendra",
      "viendrons",
      "viendrez",
      "viendront",
    ],
    con: [
      "viendrais",
      "viendrais",
      "viendrait",
      "viendrions",
      "viendriez",
      "viendraient",
    ],
    perf: [
      "suis venu",
      "es venu",
      "est venu",
      "sommes venus",
      "êtes venus",
      "sont venus",
    ],
    imperf: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
    sub: ["vienne", "viennes", "vienne", "venions", "veniez", "viennent"],
  },
  vivre: {
    pres: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
    fut: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
    con: ["vivrais", "vivrais", "vivrait", "vivrions", "vivriez", "vivraient"],
    perf: [
      "ai vécu",
      "as vécu",
      "a vécu",
      "avons vécu",
      "avez vécu",
      "ont vécu",
    ],
    imperf: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
    sub: ["vive", "vives", "vive", "vivions", "viviez", "vivent"],
  },
  voir: {
    pres: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
    fut: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
    con: ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"],
    perf: ["ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],
    imperf: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
    sub: ["voie", "voies", "voie", "voyions", "voyiez", "voient"],
  },
  vouloir: {
    pres: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
    fut: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
    con: [
      "voudrais",
      "voudrais",
      "voudrait",
      "voudrions",
      "voudriez",
      "voudraient",
    ],
    perf: [
      "ai voulu",
      "as voulu",
      "a voulu",
      "avons voulu",
      "avez voulu",
      "ont voulu",
    ],
    imperf: [
      "voulais",
      "voulais",
      "voulait",
      "voulions",
      "vouliez",
      "voulaient",
    ],
    sub: ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"],
  },
};

function createConjugationGrid(verbs, tense) {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  verbs.forEach((verb) => {
    const verbData = verbsData[verb];
    if (!verbData) {
      console.warn(`Data for verb "${verb}" not found.`);
      return;
    }

    if (!verbData[tense]) {
      console.warn(`Tense "${tense}" not found for verb "${verb}".`);
      return;
    }

    // Create a container for each verb
    const verbContainer = document.createElement("div");
    verbContainer.classList.add("verb-container");
    verbContainer.style.marginBottom = "1em";

    const verbTitle = document.createElement("h3");
    verbTitle.textContent = verb;
    verbContainer.appendChild(verbTitle);

    // Add input boxes for the specific tense
    const tenseContainer = document.createElement("div");
    tenseContainer.classList.add("tense-container");

    const inputsContainer = document.createElement("div");
    inputsContainer.classList.add("inputs-container");

    verbData[tense].forEach((_, index) => {
      const input = document.createElement("input");
      const label = document.createElement("label");
      label.for = verb + "-" + tense;
      label.style.marginRight = "1em";
      input.type = "text";
      input.id = verb + "-" + tense;
      label.classList.add("form-label");
      input.classList.add("form-control", "form-control-sm");
      input.style.width = "25em";
      if ((verb === "pleuvoir" || verb === "falloir") && index !== 2) {
        input.placeholder = `${tense} - ${["il"][index]}`;
        label.innerText = ["il"][index];
      } else {
        input.placeholder = `${tense} - ${
          ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"][index]
        }`;
        label.innerText = [
          "je",
          "tu",
          "il/elle/on",
          "nous",
          "vous",
          "ils/elles",
        ][index];
      }

      // Handle graying out for pleuvoir and falloir

      inputsContainer.appendChild(label);
      inputsContainer.appendChild(input);
      var br = document.createElement("br");
      inputsContainer.appendChild(br);
    });

    tenseContainer.appendChild(inputsContainer);

    const submit = document.createElement("button");
    submit.type = "button";
    submit.onclick = () => {
      mark(verb, tense);
    };
    submit.classList = ["btn btn-secondary mt-1"];
    submit.innerText = "Check answers";

    verbContainer.appendChild(tenseContainer);
    verbContainer.appendChild(submit);

    quizDiv.appendChild(verbContainer);
  });
}

let mark = (verb, tense) => {
  var boxes = document.querySelectorAll("input#" + verb + "-" + tense);
  var answers = verbsData[verb][tense];
  console.log(boxes);
  console.log(answers);

  var correct = 0;

  for (let index = 0; index < boxes.length; index++) {
    boxes[index].classList = [];
    boxes[index].classList.add("form-control", "form-control-sm");
    if (boxes[index].value == answers[index]) {
      // boxes[index].style.background = "#00FF00";
      boxes[index].classList.add("text-bg-success");
      correct++;
    } else if (boxes[index].value == "") {
      // do nothing
    } else {
      // boxes[index].style.background = "#FF0000";
      boxes[index].classList.add("text-bg-danger");
    }
  }

  window.alert(`You got ${correct} out of ${boxes.length} right!`);
};

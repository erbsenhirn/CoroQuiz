const tasks = [
    {
        question: "Du möchtest unbedingt deine beste Freundin Sarah mal wieder treffen. Ist das erlaubt?",
        answers: [
            "Na klar und zur Begrüßung fallen wir uns erstmal um den Hals.",
            "Ja, aber wir müssen 1,5 m Abstand halten.",
            "Ja, aber wir müssen 0,5 m Abstand halten.",
            "Leider nicht.",
        ],
        explanation: "Seit 2. Juni dürfen sich zwei Haushalte oder bis zu fünf Personen aus unterschiedlichen Haushalten gemeinsam im öffentlichen Raum aufhalten, müssen allerdings den Mindestabstand von 1,5 Meter wahren.",
        correctAnswerIndex: 1,
        answerIndex: -1,
    },
    {
        question: "Du möchtest Freitagabend endlich mal wieder in der Bar abhängen. Geht das?",
        answers: [
            "Ja, aber mit 1,5 m Abstand zu haushaltsfremden Personen.",
            "Ja, aber um 23 Uhr muss Schluss sein.",
            "Leider nicht.",
            "Ja, hier ist alles wieder so wie vor Coronazeiten.",
        ],
        explanation: "Gaststätten und Cafés dürfen seit dem 15. Mai zwar wieder öffnen, Bars bleiben jedoch weiterhin geschlossen.",
        correctAnswerIndex: 2,
        answerIndex: -1,
    },
    {
        question: "Was muss in Berlin geschlossen bleiben?",
        answers: [
            "Friseurbetriebe",
            "Kneipen und Shisha-Bars",
            "Kosmetik- und Tattoostudios",
            "Clubs und Diskotheken",
        ],
        explanation: "Friseurbetriebe, Kosmetik- und Tattoostudios sowie Massagepraxen sind wieder offen. Seit dem 2. Juni dürfen auch Kneipen und Shisha-Bars wieder bewirten. Dabei müssen Gäste und Bedienung aber Abstands- und Hygieneregeln einhalten.",
        correctAnswerIndex: 2,
        answerIndex: -1,
    },
	{
        question: "Wie viele Personen dürfen sich seit dem 10. Juni treffen?",
        answers: [
            "Im öffentlichen Raum darf man sich nur mit Personen aus maximal zwei Haushalten treffen, im privaten Raum maximal zu zehnt.",
            "Im öffentlichen Raum darf man sich nur mit Personen aus maximal zwei Haushalten treffen, im privaten Raum maximal mit 20 Personen.",
            "Im öffentlichen Raum darf man sich mit bis zu zehn Personen aus verschiedenen Haushalten oder in einer Gruppe mit Angehörigen von maximal zwei Haushalten treffen. Im privaten Raum dürfen sich maximal 20 Personen aus verschiedenen Haushalten treffen.",
            "Im öffentlichen Raum darf man sich mit so vielen Personen treffen wie man möchte.",
        ],
        explanation: "Für Familienangehörige gilt die Beschränkung zu Hause nicht. Sobald eine nicht verwandte Person hinzukommt, greift wiederum die Beschränkung auf 20 Personen maximal. In mietbaren Lokalitäten dürfen sich bis zu 99 Personen treffen. Im öffentlichen Raum ist bis zum Ablauf des 30. Juni 2020 ein Aufenthalt nur alleine oder in einer Gruppe mit Angehörigen von bis zu zwei Haushalten oder mit bis zu zehn Personen gestattet. Zu anderen Personen ist ein Mindestabstand von eineinhalb Metern einzuhalten.",
        correctAnswerIndex: 2,
        answerIndex: -1,
    },
	{
        question: "Dürfen sich Verwandte in unbegrenzter Zahl zu Hause treffen?",
        answers: [
            "Nein, die Beschränkung auf 20 Personen bei privaten Treffen zu Hause gilt für alle, unabhängig von ihrem Verwandtschaftsgrad.",
            "Ja, aber nur, wenn alle Personen miteinander verwandt sind.",
            "Ja, alle Verwandte sowie die Angehörigen des gleichen Haushalts und auch deren Partner dürfen sich in unbegrenzter Zahl zu Hause treffen.",
            "Ja, aber nur, wenn alle Personen dauerhaft in einem Haushalt zusammen wohnen.",
        ],
        explanation: "Verwandte (Großeltern, Eltern, Kinder, Enkelkinder, Geschwister und deren Nachkommen) sowie die Angehörigen des gleichen Haushalts und auch deren Partner dürfen sich in unbegrenzter Zahl zu Hause treffen..",
        correctAnswerIndex: 2,
        answerIndex: -1,
    },
	{
        question: "Muss der Mindestabstand von eineinhalb Metern auch zu Hause gewahrt werden?",
        answers: [
            "Ja, die Abstandsvorgaben von eineinhalb Metern gelten auch im privaten Raum.",
            "Die Abstandsvorgaben gelten im privaten Raum nicht. Allerdings wird empfohlen, auch im Privaten so gut es geht Abstand zu halten, insbesondere zu Personen, die zur Risikogruppe gehören.",
            "Ja, die Abstandsvorgaben gelten auch im privaten Bereich, jedoch sind diese hier auf einen halben Meter reduziert.",
            "Es kommt darauf an wie groß die jeweilige Wohnung ist. Dies kann beim lokalen Bezirksamt telefonisch erfragt werden.",
        ],
        explanation: "Auch wenn die Abstandsvorgaben im privaten Raum nicht gelten ist es hier wichtig jegliche Übertragungsmöglichkeiten zu reduzieren, um die Gefahr einer Ansteckung zu reduzieren.",
        correctAnswerIndex: 1,
        answerIndex: -1,
    },
	{
        question: "Gelten die Kontaktbeschränkungen im öffentlichen Raum auch für Autofahrten?",
        answers: [
            "Ja, da Autofahrten grundsätzlich im öffentlichen Raum erfolgen. Fahrten sind also nur alleine, mit weiteren Personen aus dem Haushalt und Personen eines weiteren Haushalts gestattet.",
            "Ja, da Fahrten mit dem privaten Auto grundsätzlich im öffentlichen Raum erfolgen.",
            "Nein, es gilt aber eine Maskenpflicht für die Beifahrer, wenn Personen aus mindestens zwei Haushalten im Wagen sitzen.",
            "Nein, im öffentlichen Straßenverkehr gilt grundsätzlich ein Vermummungsverbot, um zu verhindern, dass sich Verkehrssünder und deren Mitfahrer einer von ihnen begangenen Straftat durch einen Widerspruch entziehen können.",
        ],
        explanation: "Die Antwort lautet ja, da Fahrten mit dem privaten Auto grundsätzlich im öffentlichen Raum erfolgen. Allerdings dürften theoretisch zehn Personen (maximal) in einem Auto fahren. Alle Personen im Auto sollten allerdings eine Maske tragen, da sie lange auf engen Raum zusammen sind und so ein besonderes Infektionsrisiko besteht.",
        correctAnswerIndex: 1,
        answerIndex: -1,
    },
	{
        question: "Gilt die Maskenpflicht auch in Bankfilialen?",
        answers: [
            "Ja, die Maskenpflicht gilt hier genauso wie in allen anderen Geschäften.",
            "Ja, von der Maskenpflicht ausgenommen sind allerdings reine SB-Service-Stellen.",
            "Nein, in Bankfilialen ist das Tragen einer Maske streng verboten, um einer Gefahr durch eventuelle Straftaten in Geldinstituten vorzubeugen!",
            "Nein, grundsätzlich muss man in reinen Bankfilialen ohne Verkauf von Produkten keine Maske tragen, darf aber eine tragen.",
        ],
        explanation: "In Banken oder Postfilialen gilt die Maskenpflicht nur, wenn dort im Sinne eines Ladengeschäftes auch Produkte verkauft werden - regelmäßig etwa in Postfilialen. Unabhängig davon ist es grundsätzlich sinnvoll, eine Maske zu tragen, wo immer der Mindestabstand von eineinhalb Metern nicht eingehalten werden kann.",
        correctAnswerIndex: 3,
        answerIndex: -1,
    },
	{
        question: "Mt wem darf ich im Restaurant essen gehen??",
        answers: [
            "Mit einer unbegrenzten Zahl an Personen. Allerdings muss der Betreiber dafür sorgen, dass zwischen allen Gästen ein Mindestabstand von eineinhalb Metern eingehalten werden kann.",
            "Speisegaststätten gelten als öffentlicher Raum. Am Tisch sitzen darf man demnach mit maximal zehn Personen. Mehr dürfen es dann sein, wenn sich zwei Haushalte treffen, die insgesamt mehr als zehn Personen umfassen. Zu allen weiteren Personen muss der Mindestabstand von eineinhalb Metern eingehalten werden.",
            "Essen gehen ist nur mit Personen außerhalb der Risikogruppe erlaubt.",
            "Essen gehen ist nur mit Personen aus dem eigenen und einem weiteren Haushalt erlaubt. Der Betreiber muss einen Mindestabstand von eineinhalb Metern zwischen allen Gästen gewährleisten.",
        ],
        explanation: "In mietbaren Lokalitäten können bis zu 99 Personen zusammenkommen.",
        correctAnswerIndex: 1,
        answerIndex: -1,
    },
	{
        question: "Muss man in einer Arztpraxis eine Maske tragen?",
        answers: [
            "Ja, Patienten sowie deren Begleitpersonen ab dem vollendeten sechsten Lebensjahr müssen in sämtlichen Praxen, auch humanmedizinischer Heilberufe wie bei Physiotherapeuten oder Ergotherapeuten eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung tragen, wenn dies nicht aus medizinischen oder aus sonstigen zwingenden Gründen unzumutbar ist.",
            "Nein, es gibt keine generelle Maskenpflicht in Arztpraxen.",
            "Ja, in Arztpraxen gilt jede Person, unabhängig vom Alter eine generell Maskenpflicht.",
            "Nein, die Maskenpflicht in Arztpraxen gilt nur für Patienten, die sich in der Risikogruppe befinden.",
        ],
        explanation: "Es gibt keine generelle Maskenpflicht in Arztpraxen. Allerdings müssen Patienten ab einem Alter von sechs Jahren eine Mund- und Nasenbedeckung beim Zahnarzt oder Physiotherapeuten tragen, wenn dies nicht aus medizinischen oder aus sonstigen zwingenden Gründen unzumutbar ist.",
        correctAnswerIndex: 0,
        answerIndex: -1,
    },
	{
        question: "Gelten die Abstandsregeln auch im Schwimmbad?",
        answers: [
            "Ja, da auch Schwimmbäder zum öffentlichen Raum zählen, gelten die Abstandsregeln sowohl für die Liegeflächen als auch im Wasser.",
            "Ja, zur Umsetzung der Abstandsregeln in Schwimmbädern ist grundsätzlich nur eine Person im Schwimmbecken erlaubt. Der Badebetrieb erfolgt in Form einer Rotation der Besucher nacheinander.",
            "Dies kommt auf die Temperatur der Schwimmanlage an, da die Ansteckungsgefahr in warmem Wasser deutlich höher als in kaltem Waser ist.",
            "Nein, aber die Anzahl der Personen im Wasser ist begrenzt. Pro Person sind in Schwimmerbecken zehn Quadratmeter, in Nichtschwimmerbecken vier Quadratmeter vorgesehen. Ausnahmen gelten beispielsweise für Eltern und ihre Kinder.",
        ],
        explanation: "Abweichend hiervon kann die Wasserfläche auch in einzelne Bahnen unterteilt werden, möglichst mit Leinen oder anderen geeigneten Markierungen. Auf einer 50-Meter-Bahn dürfen etwa nur maximal zehn Personen gleichzeitig schwimmen - und pro Bahn immer nur in eine Richtung. Für Liegewiesen und Liegeflächen errechnet sich die maximale Anzahl an Personen, die sich gleichzeitig auf diesen niederlassen dürfen, aus der Gesamtfläche und einer Liegefläche von zehn Quadratmetern pro Person.",
        correctAnswerIndex: 3,
        answerIndex: -1,
    },
	{
        question: "Welche aus dem Ausland einreisenden Personen müssen sich in eine 14-tägige häusliche Quarantäne begeben?",
        answers: [
            "Alle Personen. Ausnahmen gelten nur für Berufspendler und Durchreisende.",
            "Alle Personen, die aus dem EU-Ausland einreisen.",
            "Personen, die aus Staaten einreisen, die eine Neuinfiziertenzahl im Verhältnis zur Bevölkerung von mehr als 50 Fällen pro 100.000 Einwohner kumulativ in den letzten sieben Tagen aufweisen.",
            "Die 14-tägige häusliche Quarantäne gilt grundsätzlich nur für Berufspendler und Durchreisende.",
        ],
        explanation: "Personen aus Staaten mit einer Neuinfiziertenzahl im Verhältnis zur Bevölkerung von mehr als 50 Fällen pro 100.000 Einwohner kumulativ in den letzten sieben Tagen sind dazu verpflichtet sich unverzüglich nach der Einreise auf direktem Weg in die eigene Häuslichkeit oder eine andere geeignete Unterkunft zu begeben und sich für einen Zeitraum von 14 Tagen nach ihrer Einreise ständig dort abzusondern.",
        correctAnswerIndex: 2,
        answerIndex: -1,
    },
	{
        question: "Welche Regeln gelten beim Kontaktsport?",
        answers: [
            "Maximal fünf Spieler oder Spielerinnen dürfen in Kleingruppen trainieren.",
            "Grundsätzlich muss ein Mindestabstand von eineinhalb Metern eingehalten werden. Ausnahmen gelten nur für Verwandte ersten Grades und Personen aus dem eigenen Haushalt.",
            "Die Ausübung von Kontakt-Mannschaftssportarten ist grundsätzlich verboten. Sportarten, die zwingend nahen Kontakt erfordern, dürfen weiterhin nicht ausgeübt werden. Dazu gehören allen voran Mannschaftssportarten wie Fußball, Handball oder Basketball. Training mit hochintensiver Ausdauerbelastung darf derzeit nur im Freien stattfinden.",
            "Bei Ballsportarten ist der Spielball vor und nach jeder Spielzeit gründlich zu desinfizieren.",
        ],
        explanation: "Prinzipiell dürfen seit dem 2. Juni alle öffentlichen und privaten Sportanlagen und Sportstätten wieder öffnen – egal ob drinnen oder draußen. Während des gesamten Trainings und bei allen Übungen muss allerdings ein Abstand von mindestens eineinhalb Metern zu allen anderen Sportlerinnen und Sportlern eingehalten werden. Mehr Nähe darf auch beim Sport nur dann sein, wenn die Personen in gerader Linie verwandt sind, wenn es sich um Geschwister oder deren Nachkommen handelt oder die Personen ohnehin in einem gemeinsamen Haushalt zusammenleben. Für alle anderen Personen ist direkter körperlicher Kontakt untersagt. Seit dem 11. Juni dürfen in Baden-Württemberg Wettbewerbe und Wettkämpfe im Breiten- und Leistungssport ohne Zuschauerinnen und Zuschauer wieder ausgetragen werden.",
        correctAnswerIndex: 2,
        answerIndex: -1,
    },
	{
        question: "Welchen Mindestabstand sollten Jogger und Radfahrer zu anderen Passanten einhalten?",
        answers: [
            "Der Abstand sollte nur ein bisschen größer als die generell empfohlenen eineinhalb Meter sein. Ausreichend ist ein Abstand von zwei bis fünf Metern.",
            "Empfohlen ist ein Abstand von fünf bis zehn Metern.",
            "Beim Joggen ist ein Abstand von drei Metern zu Passanten vorgesehen, um einer Übertragung durch Schweiß vorzubeugen.",
            "Beim Joggen und Radfahren sollte zu anderen Personen ein Abstand von zehn bis zwanzig Metern eingehalten werden.",
        ],
        explanation: "Beim Joggen und Radfahren sollte zu anderen Personen ein Abstand von zehn bis zwanzig Metern eingehalten werden, um während einer körperlichen Betätigung die Ansteckungsgefahr deutlich zu reduzieren.",
        correctAnswerIndex: 3,
        answerIndex: -1,
    },
];

export default tasks;
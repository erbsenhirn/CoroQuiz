import { FEDERAL_STATES} from './constants';

const tasks = [
	{
        question: "Wie viele Personen dürfen sich seit dem 10. Juni treffen?",
        answers: [
            "Personen aus maximal zwei Haushalten, im privaten Raum maximal zu zehnt.",
            "Personen aus maximal zwei Haushalten, im privaten Raum maximal mit 20 Personen.",
            "Bis zu zehn Personen aus verschiedenen Haushalten oder in einer Gruppe mit Angehörigen aus maximal zwei Haushalten.",
            "Es dürfen sich so viele Personen treffen wie sie möchten.",
        ],
        explanation: "Für Familienangehörige gilt die Beschränkung zu Hause nicht. Sobald eine nicht verwandte Person hinzukommt, greift wiederum die Beschränkung auf 20 Personen maximal. In mietbaren Lokalitäten dürfen sich bis zu 99 Personen treffen. Im öffentlichen Raum ist bis zum Ablauf des 30. Juni 2020 ein Aufenthalt nur alleine oder in einer Gruppe mit Angehörigen von bis zu zwei Haushalten oder mit bis zu zehn Personen gestattet. Zu anderen Personen ist ein Mindestabstand von eineinhalb Metern einzuhalten.",
        correctAnswerIndex: 2,
        answerIndex: -1,
        federalState: FEDERAL_STATES.BERLIN,
        sourceLink: "https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html",
    },
	{
        question: "Dürfen sich Verwandte in unbegrenzter Zahl zu Hause treffen?",
        answers: [
            "Nein, die Beschränkung auf 20 Personen bei privaten Treffen zu Hause gilt für alle, unabhängig von ihrem Verwandtschaftsgrad.",
            "Ja, aber nur, wenn alle Personen miteinander verwandt sind.",
            "Ja, alle Verwandte sowie die Angehörigen des gleichen Haushalts und auch deren Partner dürfen sich in unbegrenzter Zahl zu Hause treffen.",
            "Ja, aber nur, wenn alle Personen dauerhaft in einem Haushalt zusammen wohnen.",
        ],
        explanation: "Verwandte (Großeltern, Eltern, Kinder, Enkelkinder, Geschwister und deren Nachkommen) sowie die Angehörigen des gleichen Haushalts und auch deren Partner dürfen sich in unbegrenzter Zahl zu Hause treffen.",
        correctAnswerIndex: 2,
        answerIndex: -1,
        federalState: FEDERAL_STATES.BERLIN,
        sourceLink: "https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html",
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
        federalState: FEDERAL_STATES.BERLIN,
        sourceLink: "https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html",
    },
	{
        question: "Gelten die Kontaktbeschränkungen im öffentlichen Raum auch für Autofahrten?",
        answers: [
            "Fahrten sind nur alleine, mit weiteren Personen aus dem Haushalt und Personen eines weiteren Haushalts gestattet.",
            "Ja, da Fahrten mit dem privaten Auto grundsätzlich im öffentlichen Raum erfolgen.",
            "Nein, es gilt aber eine Maskenpflicht für die Beifahrer, wenn Personen aus mindestens zwei Haushalten im Wagen sitzen.",
            "Nein, im öffentlichen Straßenverkehr gilt grundsätzlich ein Vermummungsverbot.",
        ],
        explanation: "Die Antwort lautet ja, da Fahrten mit dem privaten Auto grundsätzlich im öffentlichen Raum erfolgen. Allerdings dürften theoretisch zehn Personen (maximal) in einem Auto fahren. Alle Personen im Auto sollten allerdings eine Maske tragen, da sie lange auf engen Raum zusammen sind und so ein besonderes Infektionsrisiko besteht.",
        correctAnswerIndex: 1,
        answerIndex: -1,
        federalState: FEDERAL_STATES.BRANDENBURG,
        sourceLink: "https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html",
    },
	{
        question: "Gilt die Maskenpflicht auch in Bankfilialen?",
        answers: [
            "Ja, die Maskenpflicht gilt hier genauso wie in allen anderen Geschäften.",
            "Ja, von der Maskenpflicht ausgenommen sind allerdings reine SB-Service-Stellen.",
            "Nein, in Bankfilialen ist das Tragen einer Maske streng verboten!",
            "Nein, grundsätzlich muss man in reinen Bankfilialen ohne Verkauf von Produkten keine Maske tragen, darf aber eine tragen.",
        ],
        explanation: "In Banken oder Postfilialen gilt die Maskenpflicht nur, wenn dort im Sinne eines Ladengeschäftes auch Produkte verkauft werden - regelmäßig etwa in Postfilialen. Unabhängig davon ist es grundsätzlich sinnvoll, eine Maske zu tragen, wo immer der Mindestabstand von eineinhalb Metern nicht eingehalten werden kann.",
        correctAnswerIndex: 3,
        answerIndex: -1,
        federalState: FEDERAL_STATES.BRANDENBURG,
        sourceLink: "https://www.swr.de/swraktuell/baden-wuerttemberg/corona-quiz-100.html",
    },
];

export default tasks;
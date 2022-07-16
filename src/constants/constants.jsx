import aries from './images/aries.jpg';
import taurus from './images/taurus.jpg';
import gemini from './images/gemini.jpg';
import cancer from './images/cancer.jpg';
import leo from './images/leo.jpg';
import virgo from './images/virgo.jpg';
import libra from './images/libra.jpg';
import scorpio from './images/scorpio.jpg';
import sagittarius from './images/sagittarius.jpg'
import capricorn from './images/capricorn.jpg';
import aquarius from './images/aquarius.jpg';
import pisces from './images/pisces.jpg';
import { GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo, GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces } from 'react-icons/gi';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';

export const zodiac = [
    {
        name: "Aries",
        url: "aries",
        timeStart: "03-21",
        timeEnd: "04-19",
        symbol: "",
        image: aries,
        description: "Aries contains no very bright stars; the brightest star, Hamal (Arabic for “sheep”), has a magnitude of 2.0. The first point of Aries, or vernal equinox, is an intersection of the celestial equator with the apparent annual pathway of the Sun and the point in the sky from which celestial longitude and right ascension are measured. The vernal equinox no longer lies in Aries but has been moved into Pisces by the precession of the equinoxes."
    },
    {
        name: "Taurus",
        url: "taurus",
        timeStart: "04-20",
        timeEnd: "05-20",
        symbol: "",
        image: taurus,
        description: "In astrology, Taurus is the second sign of the zodiac, considered as governing that portion of the year from about April 20 to about May 20. Its representation as a bull is related to the Greek myth of Zeus, who assumed the form of a bull to abduct Europa."
    },
    {
        name: "Gemini",
        url: "gemini",
        timeStart: "05-21",
        timeEnd: "06-20",
        symbol: "",
        image: gemini,
        description: "In astrology, Gemini is the third sign of the zodiac, considered as governing the period from about May 21 to about June 21. It is represented by a set of twins (or in Egyptian astrology by a pair of goats and in Arabian astrology by a pair of peacocks). In addition to their identification as Castor and Pollux, the twins have also been related to other celebrated pairs, such as the younger and older Horus or Romulus and Remus."
    },
    {
        name: "Cancer",
        url: "cancer",
        timeStart: "06-21",
        timeEnd: "07-22",
        symbol: "",
        image: cancer,
        description: "In astrology, Cancer is the fourth sign of the zodiac, considered as governing the period from about June 22 to about July 22. Its representation as a crab (or lobster or crayfish) is related to the crab in Greek mythology that pinched Heracles while he was fighting the Lernaean hydra. Crushed by Heracles, the crab was rewarded by Heracles’ enemy, Hera, by being placed in the heavens."
    },
    {
        name: "Leo",
        url: "leo",
        timeStart: "07-23",
        timeEnd: "08-22",
        symbol: "",
        image: leo,
        description: "In astrology, Leo is the fifth sign of the zodiac, considered as governing the period from about July 23 to about August 22. Its representation as a lion is usually linked with the Nemean lion slain by Heracles (Hercules)."
    },
    {
        name: "Virgo",
        url: "virgo",
        timeStart: "08-23",
        timeEnd: "09-22",
        symbol: "",
        image: virgo,
        description: "In astrology, Virgo is the sixth sign of the zodiac, considered as governing the period from about August 23 to about September 22. It is represented as a young maiden carrying a sheaf of wheat. She is variously identified as a fertility goddess (the Babylonian and Assyrian Ishtar, among others) or the harvest maiden (the Greek Persephone and others)."
    },
    {
        name: "Libra",
        url: "libra",
        timeStart: "09-23",
        timeEnd: "10-22",
        symbol: "",
        image: libra,
        description: "In astrology, Libra is the seventh sign of the zodiac, considered as governing the period from about September 22 to about October 23. It is represented by a woman (sometimes identified with Astraea, the Roman goddess of justice), holding a balance scale or by the balance alone."
    },
    {
        name: "Scorpio",
        url: "scorpio",
        timeStart: "10-23",
        timeEnd: "11-21",
        symbol: "",
        image: scorpio,
        description: "In astrology, Scorpius (or Scorpio) is the eighth sign of the zodiac, considered as governing the period from about October 24 to about November 21. Its representation as a scorpion is related to the Greek legend of the scorpion that stung Orion to death (said to be why Orion sets as Scorpius rises in the sky). Another Greek myth relates that a scorpion caused the horses of the Sun to bolt when they were being driven for a day by the inexperienced youth Phaeton."
    },
    {
        name: "Sagittarius",
        url: "sagittarius",
        timeStart: "11-22",
        timeEnd: "12-21",
        symbol: "",
        image: sagittarius,
        description: "In astrology, Sagittarius is the ninth sign of the zodiac, considered as governing the period from about November 22 to about December 21. It is represented either by a centaur shooting a bow and arrow or by an arrow drawn across a bow. The identification of Sagittarius as a mounted archer was made by the Babylonians as early as the 11th century bce."
    },
    {
        name: "Capricorn",
        url: "capricorn",
        timeStart: "12-22",
        timeEnd: "01-19",
        symbol: "",
        image: capricorn,
        description: "In astronomy, Capricornus is a zodiacal constellation lying in the southern sky between Aquarius and Sagittarius, at about 21 hours right ascension and 20° south declination. Its stars are faint; Deneb Algedi (Arabic for “kid’s tail”) is the brightest star, with a magnitude of 2.9. Capricornus usually refers to the constellation, and Capricorn usually refers to the astrological sign."
    },
    {
        name: "Aquarius",
        url: "aquarius",
        timeStart: "01-20",
        timeEnd: "02-28",
        symbol: "",
        image: aquarius,
        description: "In astrology, Aquarius is the 11th sign of the zodiac, considered as governing the period from about January 20 to about February 18. Its representation as a man pouring a stream of water out of a jug came about, it has been suggested, because in ancient times the rising of Aquarius coincided in the Middle East with a period of floods and rain."
    },
    {
        name: "Pisces",
        url: "pisces",
        timeStart: "02-19",
        timeEnd: "03-20",
        symbol: "",
        image: pisces,
        description: "In astrology, Pisces is the 12th sign of the zodiac, considered as governing the period from about February 19 to about March 20. Its representation as two fish tied together is usually related to the Greek myth of Aphrodite and Eros, who jumped into a river to escape the monster Typhon and changed into fish, or, alternatively, the two fish that carried them to safety."
    },
];

export const icons = [
    GiAries,
    GiTaurus,
    GiGemini,
    GiCancer,
    GiLeo,
    GiVirgo,
    GiLibra,
    GiScorpio,
    GiSagittarius,
    GiCapricorn,
    GiAquarius,
    GiPisces
]

export const socialMediaIcons = [
        BsFacebook ,
        BsInstagram ,
        BsGithub 
]
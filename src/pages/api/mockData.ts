import { NextApiRequest, NextApiResponse } from "next";

export type UserLevel = 'bronze' | 'silver' | 'gold' | 'diamond';

export interface Post {
    id: string;
    username: string;
    avatar: string;
    level: UserLevel;
    mbtiType: string;
    zodiacSign: string;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    hasImage?: boolean;
    imageUrl?: string;
}

export interface Question {
    id: string;
    text: string;
    date: string;
    likes: number;
    comments: number;
}

export interface Universe {
    tag: string;
    count: string;
}

export interface NavItem {
    icon: string;
    label: string;
    href: string;
    isActive?: boolean;
}

export const navItems: NavItem[] = [
    { icon: "home", label: "Home", href: "/", isActive: true },
    { icon: "heart", label: "Match", href: "/match" },
    { icon: "message", label: "Messages", href: "/messages" },
    { icon: "user", label: "Profile", href: "/profile" },
    { icon: "database", label: "Personality Database", href: "/database" },
    { icon: "test", label: "Personality Tests", href: "/tests" },
    { icon: "book", label: "Resources", href: "/resources" },
];

export const universes: Universe[] = [
    { tag: "#music", count: "1.3M souls" },
    { tag: "#movies", count: "1.2M souls" },
    { tag: "#food", count: "8.9K souls" },
    { tag: "#gaming", count: "8.7K souls" },
    { tag: "#anime", count: "6.2M souls" },
    { tag: "#animals", count: "4.4K souls" },
    { tag: "#technology", count: "4.2M souls" },
    { tag: "#outdoors", count: "4.1K souls" },
    { tag: "#art", count: "4K souls" },
    { tag: "#memes", count: "3.8K souls" },
    { tag: "#books", count: "3.4K souls" },
    { tag: "#psychology", count: "3.3K souls" },
    { tag: "#history", count: "3K souls" },
    { tag: "#learning", count: "2.8K souls" },
    { tag: "#culture", count: "2.8K souls" },
    { tag: "#videos", count: "2.8K souls" },
    { tag: "#science", count: "2.7K souls" },
    { tag: "#languages", count: "1.7K souls" },
    { tag: "#philosophy", count: "1.6K souls" },
    { tag: "#sports", count: "1.4K souls" },
    { tag: "#relationshipadvice", count: "1M souls" },
    { tag: "#fitness", count: "745K souls" },
    { tag: "#fashion", count: "583K souls" },
    { tag: "#country", count: "445K souls" },
    { tag: "#travel", count: "1.5M souls" },
    { tag: "#photography", count: "890K souls" },
    { tag: "#coding", count: "2.1M souls" },
    { tag: "#writing", count: "120K souls" },
    { tag: "#nature", count: "3.4M souls" },
    { tag: "#health", count: "670K souls" },
    { tag: "#finance", count: "450K souls" },
    { tag: "#politics", count: "1.2M souls" },
    { tag: "#spirituality", count: "310K souls" },
    { tag: "#cars", count: "540K souls" },
    { tag: "#space", count: "2.3M souls" },
    { tag: "#gardening", count: "85K souls" }
];

export const posts: Post[] = [
    {
        id: "1",
        username: "Jay",
        avatar: "/avatars/jay.jpg",
        level: "gold",
        mbtiType: "INFJ",
        zodiacSign: "Pisces",
        content:
            "percaya aja sih kalo bagus wkwk",
        timestamp: "2mo",
        likes: 8,
        comments: 1,
    },
    {
        id: "2",
        username: "Sadia",
        avatar: "/avatars/sadia.jpg",
        level: "diamond",
        mbtiType: "ENTJ",
        zodiacSign: "Cancer",
        content: "Percayaa!",
        timestamp: "7mo",
        likes: 7,
        comments: 2,
    },
    {
        id: "3",
        username: "Debbie",
        avatar: "/avatars/debbie.jpg",
        level: "silver",
        mbtiType: "INFJ",
        zodiacSign: "Libra",
        content: "gak tau sih, tp kalo gemini percaya",
        timestamp: "",
        likes: 0,
        comments: 0,
        hasImage: true,
        imageUrl: "/images/post-image.jpg",
    },
    {
        id: "4",
        username: "Dina",
        avatar: "/avatars/debbie.jpg",
        level: "silver",
        mbtiType: "INFJ",
        zodiacSign: "Libra",
        content: "apa sih ini",
        timestamp: "10mo",
        likes: 0,
        comments: 0,
        hasImage: false,
    },
    {
        id: "5",
        username: "ratna",
        avatar: "/avatars/debbie.jpg",
        level: "gold",
        mbtiType: "INFJ",
        zodiacSign: "leo",
        content: "for some reason i agree with that",
        timestamp: "1y",
        likes: 0,
        comments: 0,
        hasImage: false,
    },
    {
        id: "5",
        username: "edu",
        avatar: "/avatars/debbie.jpg",
        level: "gold",
        mbtiType: "ENFP",
        zodiacSign: "Aries",
        content: "lets having fun together",
        timestamp: "1y",
        likes: 0,
        comments: 0,
        hasImage: false,
    },
];

export const questions: Question[] = [
    {
        id: "1",
        text: "Apa kamu percaya dengan zodiak?",
        date: "12/14/2025",
        likes: 573,
        comments: 3379,
    },
    {
        id: "2",
        text: "What's the strangest job you've ever had or considered?",
        date: "12/20/2025",
        likes: 236,
        comments: 2624,
    },
    {
        id: "3",
        text: "If you could have dinner with three people dead or alive, who?",
        date: "12/21/2025",
        likes: 322,
        comments: 2659,
    },
    {
        id: "4",
        text: "What's a topic you could talk about for hours?",
        date: "12/18/2025",
        likes: 424,
        comments: 4351,
    },
    {
        id: "5",
        text: "What's your go-to karaoke song?",
        date: "12/15/2025",
        likes: 320,
        comments: 3329,
    },
    {
        id: "6",
        text: "Apakah kamu pernah mengalami mimpi yang membuatmu tersenyum?",
        date: "12/15/2025",
        likes: 320,
        comments: 3329,
    },
    {
        id: "7",
        text: "Apakah ada mimpi yang sering kali membuatmu tersenyum?",
        date: "12/15/2025",
        likes: 370,
        comments: 779,
    },
    {
        id: "8",
        text: "Apakah ada ada yang salah?",
        date: "12/15/2025",
        likes: 1320,
        comments: 129,
    },
    {
        id: "9",
        text: "Apakah ada yang tidak masuk akal?",
        date: "12/15/2025",
        likes: 120,
        comments: 13329,
    },
    {
        id: "10",
        text: "Apakah ada yang ada hal lain?",
        date: "12/15/2025",
        likes: 120,
        comments: 129,
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { type } = req.query;

    switch (type) {
        case "posts":
            return res.status(200).json(posts);
        case "questions":
            return res.status(200).json(questions);
        case "universes":
            return res.status(200).json(universes);
        case "nav":
            return res.status(200).json(navItems);
        default:
            return res.status(200).json({
                posts,
                questions,
                universes,
                navItems,
            });
    }
}

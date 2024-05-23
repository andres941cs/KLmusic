import { Lyric } from '@models/Lyric';
import { FC, ReactNode, createContext, useState } from 'react';

interface KaraokeState {
    // Define the state properties of your karaoke here
    id?: number;
    settings?: string;
    isPublished?: number;
    user?: string;
    lyric?: Lyric;
}

interface KaraokeContextProps {
    karaokeState: KaraokeState;
    setKaraokeState: React.Dispatch<React.SetStateAction<KaraokeState>>;
}
const initialKaraokeState: KaraokeState = {
    settings: undefined,
    isPublished: undefined,
    user: undefined,
    lyric: undefined,
};

export const KaraokeContext = createContext<KaraokeContextProps>({
    karaokeState: initialKaraokeState,
    setKaraokeState: () => {},
});

export const KaraokeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [karaokeState, setKaraokeState] = useState<KaraokeState>(initialKaraokeState);

    return (
        <KaraokeContext.Provider value={{ karaokeState, setKaraokeState }}>
            {children}
        </KaraokeContext.Provider>
    );
}
import { Lyric } from '@models/Lyric';
import { FC, ReactNode, createContext, useState } from 'react';

interface KaraokeState {
    // Define the state properties of your karaoke here
    id?: number;
    settings?: string;
    isPublished?: number;
    id_user?: number;
    lyric?: Lyric;
}

interface KaraokeContextProps {
    karaokeState: KaraokeState;
    setKaraokeState: React.Dispatch<React.SetStateAction<KaraokeState>>;
    updateUser: (id:number) => void;
}
const initialKaraokeState: KaraokeState = {
    settings: undefined,
    isPublished: undefined,
    id_user: undefined,
    lyric: undefined,
};

export const KaraokeContext = createContext<KaraokeContextProps>({
    karaokeState: initialKaraokeState,
    setKaraokeState: () => {},
    updateUser: () => {},
});

export const KaraokeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [karaokeState, setKaraokeState] = useState<KaraokeState>(initialKaraokeState);

    const updateUser = (id:number) => {
        setKaraokeState((prevState) => ({
          ...prevState,
          id_user: id
        }));
      };

    return (
        <KaraokeContext.Provider value={{ karaokeState, setKaraokeState, updateUser}}>
            {children}
        </KaraokeContext.Provider>
    );
}
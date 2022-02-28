export interface NowPlaying {
  pick_id: number;
  artist_id: number;
  artist: string;
  song_id: number;
  song: string;
  artwork_small: string;
  artwork_large: string;
  user: string;
  user_image_small: string;
  user_image_large: string;
  likes: number;
  dislikes: number;
  duration?: number;
  remaining?: number
}
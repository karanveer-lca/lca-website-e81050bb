import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoDialogProps {
  trigger?: React.ReactNode;
  videoUrl: string;
}

const VideoDialog = ({ trigger, videoUrl }: VideoDialogProps) => {
  const [open, setOpen] = useState(false);
  const [videoAvailable, setVideoAvailable] = useState(true);

  // Extract YouTube video ID from various YouTube URL formats
  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      let videoId = "oKt9c_7X0n8";

      if (urlObj.hostname.includes("youtube.com")) {
        if (urlObj.pathname.includes("/shorts/")) {
          videoId = urlObj.pathname.split("/shorts/")[1];
        } else {
          videoId = urlObj.searchParams.get("v") || "";
        }
      } else if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      }

      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch {
      return null;
    }
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  const handleOpen = () => {
    if (!embedUrl) {
      setVideoAvailable(false);
    }
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <div onClick={handleOpen} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <button
          onClick={handleOpen}
          className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-10 py-6 text-lg shadow-elevated transition-all duration-300 flex items-center gap-2"
        >
          <Play className="w-5 h-5" />
          Watch Intro
        </button>
      )}
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Company Introduction</DialogTitle>
          <DialogDescription>
            {videoAvailable && embedUrl ? "Watch our introduction video" : "Video not available right now"}
          </DialogDescription>
        </DialogHeader>
        {videoAvailable && embedUrl ? (
          <div className="w-full" style={{ aspectRatio: "9/16" }}>
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="w-full bg-muted rounded-lg flex items-center justify-center" style={{ aspectRatio: "9/16" }}>
            <p className="text-muted-foreground">Video not available right now</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;

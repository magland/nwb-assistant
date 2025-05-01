import { Box } from "@mui/material";
import ChatInterface from "../chat/ChatInterface";

interface ChatPageProps {
  width: number;
  height: number;
}

const maxWidth = 1200;

function ChatPage({ width, height }: ChatPageProps) {
  return (
    <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: Math.min(width, maxWidth) }}>
      <ChatInterface
        width={Math.min(width, maxWidth)}
        height={height}
      />
    </Box>
  )
}

export default ChatPage;

import {
  PanelSection,
  PanelSectionRow,
  TextField,
  ToggleField,
  ButtonItem,
  Focusable,
  staticClasses,
} from "@decky/ui";
import { definePlugin } from "@decky/api";
import { FC, useState } from "react";
import { FaRobot } from "react-icons/fa";

const Content: FC<{}> = ({}) => {
  const [prompt, setPrompt] = useState<string>("");
  const [includeScreenshot, setIncludeScreenshot] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const takeScreenshot = async (): Promise<Blob | null> => {
    try {
      // Use Steam Deck's screenshot API
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return null;

      // Get the current viewport
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Use html2canvas-like functionality or Steam Deck specific APIs
      // For now, we'll use a simple approach with getUserMedia
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      });

      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      return new Promise((resolve) => {
        video.addEventListener('loadedmetadata', () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0);

          stream.getTracks().forEach(track => track.stop());

          canvas.toBlob((blob) => {
            resolve(blob);
          }, 'image/png');
        });
      });
    } catch (error) {
      console.error('Failed to take screenshot:', error);
      return null;
    }
  };

  const sendRequest = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setResponse("");

    try {
      const formData = new FormData();
      formData.append('prompt', prompt);

      if (includeScreenshot) {
        const screenshotBlob = await takeScreenshot();
        if (screenshotBlob) {
          formData.append('image', screenshotBlob, 'screenshot.png');
        }
      }

      const response = await fetch('http://localhost:2000/claude', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.response || 'No response received');
    } catch (error) {
      console.error('Error calling Claude API:', error);
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <PanelSection title="Claude Assistant">
        <PanelSectionRow>
          <ToggleField
            label="Include Screenshot"
            checked={includeScreenshot}
            onChange={setIncludeScreenshot}
            description="Capture and send a screenshot with your prompt"
          />
        </PanelSectionRow>

        <PanelSectionRow>
          <Focusable style={{ display: "flex", width: "100%" }}>
            <TextField
              label="Prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              style={{ width: "100%" }}
            />
          </Focusable>
        </PanelSectionRow>

        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={sendRequest}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? "Generating..." : "Send Request"}
          </ButtonItem>
        </PanelSectionRow>

        {response && (
          <PanelSectionRow>
            <div style={{
              backgroundColor: "#1a1a1a",
              padding: "10px",
              borderRadius: "4px",
              maxHeight: "300px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }}>
              <strong>Response:</strong>
              <br />
              {response}
            </div>
          </PanelSectionRow>
        )}
      </PanelSection>
    </div>
  );
};

export default definePlugin(() => {
  return {
    name: "Claude Assistant Plugin",
    titleView: <div className={staticClasses.Title}>Claude Assistant Plugin</div>,
    content: <Content />,
    icon: <FaRobot />,
    onDismount() {
      // Cleanup when plugin unloads
    },
  };
});
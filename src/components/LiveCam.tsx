import { Anchor } from "@mantine/core";

type LiveCamProps = {
    resort: string
};

export default function LiveCam({ resort }: LiveCamProps) {
    function liveCams(resort: string): string[] {
        let urls: string[] = [];
        switch (resort) {
            case 'Brighton':
                urls = [
                    "https://www.youtube.com/embed/iq-CT8UQzgo?si=toe60D52-jmCPsac&amp;controls=0&amp;autoplay=1", 
                    "https://www.youtube.com/embed/YDyBL3bXOwA?si=XjvA0VDVGj_CPdBM&amp;controls=0&amp;autoplay=1"
                ]
                break;
            case 'Solitude':
                urls = [
                    "https://www.youtube.com/embed/ta-4QZbfMXc?si=fk6k-E_EBdqZppqV&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/d8hFWghj84k?si=QbM1mPDt9IYS1T26&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/Lnznapxh2xM?si=HKgi4idrKYvEEH3h&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/Hhv0J8fQAxw?si=P3NMJLt-ZfkZlY3k&amp;controls=0&amp;autoplay=1"
                ]
                break;
            case 'Alta':
                urls = [
                    "https://storage.googleapis.com/prism-cam-00088/running/00088_timelapse_1080.mp4"
                ]
                break;
        }
        return urls
    }
    
    // ToDo: Snowbird should probably be a different component
    if (resort === 'Snowbird') {
        return (
            <Anchor href="https://www.snowbird.com/mountain-report/#webcams" target="_blank" underline="hover">
                    Live feeds only available on Snowbird's website.
            </Anchor>
        )
    }
    return (
        liveCams(resort).map((url) => 
            <iframe width="560" height="315" src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        )
    )
};

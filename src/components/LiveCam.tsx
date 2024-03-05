import { Anchor, Group, Stack } from "@mantine/core";

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
                    "https://www.youtube.com/embed/YDyBL3bXOwA?si=XjvA0VDVGj_CPdBM&amp;controls=0&amp;autoplay=1"]
                break
            case 'Solitude':
                urls = [
                    "https://www.youtube.com/embed/ta-4QZbfMXc?si=fk6k-E_EBdqZppqV&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/d8hFWghj84k?si=QbM1mPDt9IYS1T26&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/Lnznapxh2xM?si=HKgi4idrKYvEEH3h&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/WGo1Fy5mYaA?si=QPq0FMY1-mz47Yba&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/Hhv0J8fQAxw?si=P3NMJLt-ZfkZlY3k&amp;controls=0&amp;autoplay=1"]
                break
            case 'Alta':
                urls = [
                    "https://storage.googleapis.com/prism-cam-00088/running/00088_timelapse_1080.mp4"]
                break
            case 'Deer Valley':
                urls = [
                    "https://www.youtube.com/embed/5isUB8vvMWg?si=edj4s34J7xlyuZG3&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/06TOVfkrdh4?si=gsftCqBI3b3CLuu8&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/E7Hh7Q6qIKk?si=ocHBxUuvpS5Crf_f&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/VGq3JzqSy4E?si=UY_H92Etnjq5VoHe&amp;controls=0&amp;autoplay=1",
                    "https://www.youtube.com/embed/_-jBmcnsK6s?si=MnoF9L7cTgyjdpn3&amp;controls=0&amp;autoplay=1"]
                break
            case 'Park City':
                urls = ["https://www.youtube.com/embed/kuyXQ_gUJUA?si=kUuwy6vV5sA-fGnramp;controls=0&amp;autoplay=1"]
                break
        }
        return urls
    }
    
    // ToDo: Snowbird should probably be a different component
    if (resort === 'Snowbird') {
        const url = "https://www.youtube.com/embed/UsewAQoJWXo?si=nJJ1iojQCwaU-ymB&amp;controls=0&amp;autoplay=1"
        return (
            <>
                <Stack justify="center">
                    <Anchor href="https://www.snowbird.com/mountain-report/#webcams" target="_blank" underline="hover">
                        Live feeds only available on Snowbird's website.
                    </Anchor>
                    <iframe width="560" height="315" src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Stack>
            </>
        )
    }
    return (
        liveCams(resort).map((url) => 
            <iframe width="560" height="315" src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        )
    )
};

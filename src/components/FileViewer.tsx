import React from "react";
import { Button } from "../design-system/Button";

const FileViewer: React.FC = () => {
    const openFile = () => {
        window.open(
            process.env.PUBLIC_URL + "/resume.pdf",
            "_blank"
        );
    };

    return (
        <div>
            <Button color="primary" className="paragraph-md" onClick={openFile}>
                Download CV
            </Button>
        </div>
    );
};

export { FileViewer };

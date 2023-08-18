import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DownloadButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const isAppInstalled = localStorage.getItem("isAppInstalled");
        if (isAppInstalled) {
            setIsInstalled(true);
        } else {
            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault();
                setDeferredPrompt(event);
            });
        }
    }, []);

    const handleInstallApp = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    toast.success("Usuário aceitou a instalação");
                    localStorage.setItem("isAppInstalled", true);
                    setIsInstalled(true);
                } else {
                    toast.error("Usuário recusou a instalação");
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <>
            {!isInstalled && (
                <button className="buttonDownload" onClick={handleInstallApp}>
                    Baixe o App
                </button>
            )}
        </>
    );
};

export default DownloadButton;

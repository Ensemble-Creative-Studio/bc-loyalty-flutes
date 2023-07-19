import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import { AnimationContext } from "./AnimationContext";
  export default function Overlay({ heroData }) {
    const { language, setLanguage } = useContext(AnimationContext);
  
    const overlayDataObj = {};
    for (let i = 0; i < heroData.length; i++) {
      const entry = heroData[i];
      overlayDataObj[entry.__i18n_lang] = entry;
    }
  
    return (
        <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  

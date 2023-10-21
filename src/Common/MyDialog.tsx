import {
  Dialog,
  DialogTitle,
  DialogContent,
  dialogTitleClasses,
  dialogContentClasses,
  styled
} from "@mui/material";

export interface DialogProps {
  open: boolean;
  data: dialogItem;
  onClose: (value: string) => void;
}

export type dialogItem = {
  title: string;
  content: string;
  startTime: string;
  endTime: string;
};

export const MyDialog = (props: DialogProps) => {
  const { onClose, data, open } = props;
  const ToFrom = " ～ ";

  const Tittle = styled(DialogTitle)(() => ({
    [`&.${dialogTitleClasses.root}`]: {
      width: "500px",
      fontSize: "18px",
      fontWeight: "bold",
      display: "inline",
      padding: "20px",
      backgroundColor: "black",
      color: "white"
    }
  }));

  const Time = styled(DialogContent)(() => ({
    [`&.${dialogContentClasses.root}`]: {
      fontSize: "16px",
      margin: "10px",
      padding: "0px 10px",
      textDecoration: "underline"
    }
  }));

  const Content = styled(DialogContent)(() => ({
    [`&.${dialogContentClasses.root}`]: {
      width: "500px",
      height: "300px",
      fontSize: "16px",
      display: "inline",
      padding: "0px 20px"
    }
  }));

  return (
    <Dialog open={open} onClose={onClose}>
      <Tittle>{data.title}</Tittle>
      <Time>
        {new Intl.DateTimeFormat("ja-JA", {
          dateStyle: "short",
          timeStyle: "short"
        }).format(new Date(data.startTime))}
        {ToFrom}
        {new Intl.DateTimeFormat("ja-JA", {
          timeStyle: "short"
        }).format(new Date(data.endTime))}
      </Time>
      <Content>{data.content}</Content>
    </Dialog>
  );
};

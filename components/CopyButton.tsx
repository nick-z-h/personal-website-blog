import { Button, ButtonProps, useClipboard, Container } from "@chakra-ui/react";

type CopyButtonProps = ButtonProps & {
    code: string;
};

const CopyButton = ({ code, ...props }: CopyButtonProps) => {
    const { hasCopied, onCopy } = useClipboard(code);
    return (
        <Container display="flex" justifyContent="flex-end">
            <Button
                size="sm"
                fontSize="xs"
                zIndex="1"
                onClick={onCopy}
                {...props}
            >
                {hasCopied ? "Copied" : "Copy"}
            </Button>
        </Container>
    );
};

export default CopyButton;

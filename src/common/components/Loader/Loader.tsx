import {
  Dots,
  LoaderMessage,
  LoaderOverlay,
} from './styled';

type LoaderProps = {
  message: string
}

export default function Loader({ message }: LoaderProps) {
  return (
    <LoaderOverlay>
      <LoaderMessage>
        {message}
        &nbsp;
        <Dots>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </Dots>
      </LoaderMessage>
    </LoaderOverlay>
  );
}

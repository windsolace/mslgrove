import Button from 'react-bootstrap/Button';

export default function mslgButton({text}) {
    return (
      <>
        <Button variant="primary">{text}</Button>{' '}
      </>
    )
  }
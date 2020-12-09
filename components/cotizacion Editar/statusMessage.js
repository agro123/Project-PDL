import { Modal, Alert } from 'antd';

const StatusMessage = ({onClick, title, message}) => {
    const [visible, setVisible] = useState(false);

  const handleOk = e => {
   setState(false);
  };
  const show = e => {
      setState(true)
  }
  
    return (
      <>
        <Modal
          title={title}
          visible={visible}
          onOk={handleOk}
        >
          <p>{message}</p>
        </Modal>
      </>
    );
}

export default App;
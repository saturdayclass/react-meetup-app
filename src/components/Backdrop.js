// dalam react kita bisa menggunakan single tag html jika memang di butuhkan.
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
}
export default Backdrop;

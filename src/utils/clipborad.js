const copyTextToClipboard = (text, cb) => {
  if(!navigator.clipboard){
    fallbackCopyTextToClipboard(text, cb)
    return;
  }
  navigator.clipboard.writeText(text).then(
    _ => cb(true),
    _ => cb(false)
  )
}

function fallbackCopyTextToClipboard(text, cb){
  let textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    if(successful){cb(true)}
  } catch (err) {
    cb(false)
  }
  document.body.removeChild(textArea);
}
export default copyTextToClipboard;
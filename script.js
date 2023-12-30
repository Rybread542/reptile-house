const iframe = document.querySelector('iframe');
iframe.width = iframe.contentWindow.document.body.scrollWidth;
iframe.height = iframe.contentWindow.document.body.scrollHeight;
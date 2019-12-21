const {app, BrowserWindow} = require('electron');




function createWindow(){
	let mainWindow = new BrowserWindow({
		// configurando tamanho da janela e ser exibida na tela
		width: 800,
		height:600
	});
	// carregando arquivo html
	mainWindow.loadFile(__dirname + '/src/index.html')
	mainWindow.on('close', function(){
		mainWindow = null;
	})
}

app.on('ready', createWindow);
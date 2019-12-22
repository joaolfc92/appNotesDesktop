const {app, BrowserWindow, Menu, Tray} = require('electron');
app.setAppUserModelId('com.luizfloresprog.son-electron-anotacoes');
app.setLoginItemSettings({
    openAtLogin: true
});



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

	mainWindow.setMenu(null); // função para desabilitar menu de cima 

	const contextMenu = Menu.buildFromTemplate([
		{
			label: "Mostrar Aplicativo", click: function(){
				mainWindow.show();
				
			}, 
		},

		{
			label: "Fechar Aplicativo", click: function(){
				app.isQuitting = true;
				app.quit();
			},

		}
	]);

	const tray = new Tray(__dirname + '/tray.png')
	tray.setContextMenu(contextMenu);

	mainWindow.on('close', function(e){
		if(!app.isQuitting){
			e.preventDefault();
			mainWindow.hide();
		}
	});
}

app.on('ready', createWindow);
import { Notice, Plugin, TFile } from "obsidian";

export default class HelloWorldPlugin extends Plugin {
	async onload() {
		await this.renameExistingFiles();

		this.registerEvent(
			this.app.vault.on("create", async (file) => {
				const fileName = file.name;
				if (!(file instanceof TFile)) return;

				if (!file.name.includes(" ")) return;

				const newName = file.name.replace(/ /g, "-");
				const newPath = file.path.replace(file.name, newName);

				await this.app.fileManager.renameFile(file, newPath);
				new Notice(`Renamed: ${fileName} → ${newName}`);
			}),
		);
	}

	async renameExistingFiles() {
		const files = this.app.vault.getFiles();
		for (const file of files) {
			if (!file.name.includes(" ")) continue;
			const newName = file.name.replace(/ /g, "-");
			const newPath = file.path.replace(file.name, newName);
			await this.app.fileManager.renameFile(file, newPath);
			new Notice(`Renamed: ${file.name} → ${newName}`);
		}
	}

	onunload() {}
}

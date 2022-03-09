import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "TestServer", content: "Just a test" },
    { type: "blueprint", name: "TestServer1", content: "Just a test 1" },
  ];

  onServerAdded(event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: event.serverName,
      content: event.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}

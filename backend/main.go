package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"golang.org/x/net/context"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

type User struct {
	Username string `json:"username,omitempty"`
	Message  string `json:"message,omitempty"`
}

func main() {

	ctx := context.Background()
	opt := option.WithCredentialsFile("fb_secret.json")
	config := &firebase.Config{DatabaseURL: "https://task1-chatapp-7fe8d-default-rtdb.firebaseio.com/"}

	app, err := firebase.NewApp(ctx, config, opt)
	if err != nil {
		panic(fmt.Sprintf("error initializing app: %v", err))
	}

	client, err := app.Database(ctx)
	if err != nil {
		log.Fatalln("Error initializing database client:", err)
	}

	// Get a database reference to our blog.
	ref := client.NewRef("server/saving-data/fireblog")

	usersRef := ref.Child("users")
	err = usersRef.Set(ctx, map[string]*User{
		"testUser": {
			Username: "Kenzo Wada",
			Message:  "long long text.long long text.long long text.long long text.long long text.long long text.long long text.long long text.",
		},
		"JapaneseUser": {
			Username: "名無し",
			Message:  "長い長い文章。長い長い文章。長い長い文章。長い長い文章。長い長い文章。長い長い文章。長い長い文章。長い長い文章。長い長い文章。",
		},
	})
	if err != nil {
		log.Fatalln("Error setting value:", err)
	}

	log.Println("Done")

	flag.Parse()
	hub := newHub()
	go hub.run()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

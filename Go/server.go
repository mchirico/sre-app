package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"golang.org/x/net/websocket"
)

func hello(c echo.Context) error {
	websocket.Handler(func(ws *websocket.Conn) {
		defer ws.Close()
		     // Read
			msg := ""
			err := websocket.Message.Receive(ws, &msg)
			if err != nil {
				c.Logger().Error(err)
			}
			fmt.Printf("%s\n", msg)
		for {
			// Write
			result := fmt.Sprintf("{%q: [{%q: %4.2f}, {%q: %4.2f}], %q: %q}","data","p",rand.Float32()*100,"p",rand.Float32()*100,"type","trade")
			err := websocket.Message.Send(ws, result)
			if err != nil {
				c.Logger().Error(err)

			}
				fmt.Printf("out: %s\n",result)


			
			time.Sleep(2 * time.Second)
		}
	}).ServeHTTP(c.Response(), c.Request())
	return nil
}

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Static("/", "../public")
	e.GET("/ws", hello)
	e.Logger.Fatal(e.Start(":1323"))
}

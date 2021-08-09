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
		for {
			// Write
			result := fmt.Sprintf("{%q:[{%q:%d}, {%q:%d}], %q:%q}","data","q",rand.Intn(100),"q",rand.Intn(100),"trade","trade")
			err := websocket.Message.Send(ws, result)
			if err != nil {
				//c.Logger().Error(err)
				_ = err
			}
				fmt.Printf("out: %s\n",result)


			// Read
			msg := ""
			err = websocket.Message.Receive(ws, &msg)
			if err != nil {
				//c.Logger().Error(err)
				_ = err
			}
			fmt.Printf("%s\n", msg)
			time.Sleep(3 * time.Second)
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

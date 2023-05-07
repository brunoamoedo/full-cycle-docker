FROM golang:alpine as go 

WORKDIR /app 

COPY . /app/ 

RUN go build -ldflags '-s -w' FullCycle.go

FROM scratch 

WORKDIR /

COPY --from=go /app / 

CMD [ "./FullCycle" ]



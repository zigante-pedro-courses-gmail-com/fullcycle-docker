# Layer 1
FROM golang:1.17-alpine as builder

WORKDIR /usr/src/app

COPY main.go .

RUN go build main.go

# Layer 2
FROM scratch

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/main .

CMD [ "./main" ]

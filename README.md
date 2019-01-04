Emily's future website.

How to redeploy:

```docker build -t emily .```

To test locally run this command:

```docker run --rm -p 9090:80 -i emily:latest```

and go to localhost:9090.

Then run:

```docker tag emily:latest stafeeva/emily:latest```

```docker push stafeeva/emily:latest```

Connect to Exo, run this command to download new Docker image:

```docker pull stafeeva/emily:latest```

```docker stop [container id]```

```docker run -p 80:80 -d stafeeva/emily:latest```

Done!

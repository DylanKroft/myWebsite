import os

head = "export const photos = ["
tail = "];"

for filename in os.listdir("static/photos"):
    if filename != ".DS_Store":
        head += "\n{\nsrc: 'photos/%s',\nwidth: 3,\nheight: 4},\n" % filename

head += tail

f = open("src/data/Photos.js", "w")
f.write(head)
f.close()
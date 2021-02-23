import os

head = "export const photos = ["
tail = "];"

for filename in os.listdir("static/photos"):
    if filename != ".DS_Store":
        head += "\n{\nsrc: 'photos/%s',\nwidth: 1,\nheight: 1},\n" % filename

head += tail

f = open("src/data/Photos.js", "w")
f.write(head)
f.close()
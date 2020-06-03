class Location {
    constructor(where, img, color, north, east, sud, west, item, flagi) {
        this.where = where;
        this.img = img;
        this.color = color;
        this.north = north;
        this.east = east;
        this.sud = sud;
        this.west = west;
        this.item = item;
        this.flagi = flagi
    }
}
function _Items(id, itemtext, flag, name) {
    this.id = id
    this.itemtext = itemtext
    this.flag = flag
    this.name = name
}
function _Interaction(id, location, newitem, text, where, milestone) {
    this.id = id
    this.location = location
    this.newitem = newitem
    this.text = text
    this.where = where;
    this.milestone = milestone;
}
document.addEventListener("DOMContentLoaded", function (event) {
    game = {
        board: [
            [
                new Location("You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", "NO", "YES", "NO", "NO", [], 0),
                new Location("You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", "NO", "YES", "NO", "YES", []),
                new Location("A hill", "13.gif", "rgb(117,237,243)", "NO", "YES", "YES", "YES", [31], 1),
                new Location("Some bushes", "14.gif", "rgb(202,230,51)", "NO", "YES", "NO", "YES", []),
                new Location("An old deserted hut", "15.gif", "rgb(220,204,61)", "NO", "YES", "NO", "YES", [27], 1),
                new Location("The edge of a forest", "16.gif", "rgb(167,245,63)", "NO", "YES", "NO", "YES", []),
                new Location("A dark forest", "17.gif", "rgb(140,253,99)", "NO", "NO", "YES", "YES", [14], 1)
            ],
            [
                new Location("A man nearby making tar", "21.gif", "rgb(255,190,99)", "NO", "YES", "YES", "NO", [], 0),
                new Location("A timber yard", "22.gif", "rgb(255,190,99)", "NO", "YES", "YES", "YES", [], 0),
                new Location("You are by a roadside shrine", "23.gif", "rgb(167,245,63)", "YES", "YES", "YES", "YES", [10], 1),
                new Location("You are by a small chapel", "24.gif", "rgb(212,229,36)", "NO", "YES", "NO", "YES", [], 0),
                new Location("You are on a road leading to a wood", "25.gif", "rgb(167,245,63", "NO", "YES", "YES", "YES", [], 0),
                new Location("You are in a forest", "26 i 65.gif", "rgb(167,245,63)", "NO", "YES", "NO", "YES", [], 0),
                new Location("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", "YES", "NO", "NO", "YES", [18], 1)
            ],
            [
                new Location("You are by the Vistula River", "31.gif", "rgb(122,232,252)", "YES", "YES", "NO", "NO", [], 0),
                new Location("You are by the Vistula River", "32.gif", "rgb(140,214,255)", "YES", "NO", "NO", "YES", [32], 1),
                new Location("You are on a bridge over river", "33.gif", "rgb(108,181,242)", "YES", "NO", "YES", "NO", [], 0),
                new Location("You are by the old tavern", "34.gif", "rgb(255,189,117)", "NO", "YES", "NO", "NO", [], 0),
                new Location("You are at the town's end", "35.gif", "rgb(255,190,99)", "YES", "NO", "YES", "YES", [], 0),
                new Location("You are in a butcher's shop", "36.gif", "rgb(255,188,102)", "NO", "NO", "YES", "NO", [], 0),
                new Location("You are in a cooper's house", "37.gif", "rgb(255,188,102)", "NO", "NO", "YES", "NO", [], 0)
            ],
            [
                new Location("You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", "NO", "YES", "NO", "NO", [], 0),
                new Location("You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", "NO", "YES", "NO", "YES", [], 0),
                new Location("A perfect place to set a trap", "43.gif", "rgb(255,176,141)", "YES", "NO", "NO", "YES", [], 0),
                new Location("You are by the water mill", "44.gif", "rgb(255,190,99)", "NO", "YES", "NO", "NO", [21], 1),
                new Location("You are at a main crossroad", "45.gif", "rgb(255,190,99)", "YES", "YES", "YES", "YES", [], 0),
                new Location("You are on a town street", "46.gif", "rgb(255,190,99)", "YES", "YES", "NO", "YES", [], 0),
                new Location("You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", "YES", "NO", "YES", "YES", [], 0)
            ],
            [
                new Location("You go nowhere"),
                new Location("You go nowhere"),
                new Location("You go nowhere"),
                new Location("You are by a swift stream", "54.gif", "rgb(108,181,242)", "NO", "YES", "NO", "NO", [], 0),
                new Location("You are on a street leading forest", "55.gif", "rgb(255,190,99)", "YES", "NO", "YES", "YES", [33], 1),
                new Location("You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", "NO", "NO", "YES", "NO", [], 0),
                new Location("You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", "YES", "NO", "NO", "NO", [], 0)
            ],
            [
                new Location("You go nowhere"),
                new Location("You go nowhere"),
                new Location("You go nowhere"),
                new Location("You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", "NO", "YES", "NO", "NO", [24], 1),
                new Location("You are on a path leading to the wood", "26 i 65.gif", "rgb(167,245,63)", "YES", "YES", "NO", "YES", [], 0),
                new Location("You are at the edge of a forest", "66.gif", "rgb(167,245,63)", "YES", "YES", "NO", "YES", [], 0),
                new Location("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", "NO", "NO", "NO", "YES", [], 0)
            ],
        ],
        items: [
            new _Items(10, "a KEY", true, "KEY"),
            new _Items(11, "an AXE", true, "AXE"),
            new _Items(12, "STICKS", true, "STICKS"),
            new _Items(13, "sheeplegs", false, "sheeplegs"),
            new _Items(14, "MUSHROOMS", true, "MUSHROOMS"),
            new _Items(15, "MONEY", true, "MONEY"),
            new _Items(16, "a BARREL", true, "BARREL"),
            new _Items(17, "a sheeptrunk", false, "sheeptrunk"),
            new _Items(18, "BERRIES", true, "BERRIES"),
            new _Items(19, "WOOL", true, "WOOL"),
            new _Items(20, "a sheepskin", false, "sheepskin"),
            new _Items(21, "a BAG", true, "BAG"),
            new _Items(22, "a RAG", true, "RAG"),
            new _Items(23, "a sheephead", false, "sheephead"),
            new _Items(24, "a SPADE", true, "SPADE"),
            new _Items(25, "SULPHUR", true, "SULPHUR"),
            new _Items(26, "a solid poison", false, "solid poison"),
            new _Items(27, "a BUCKET", true, "BUCKET"),
            new _Items(28, "TAR", true, "TAR"),
            new _Items(29, "a liquid poison", false, "liquid poison"),
            new _Items(30, "a dead dragon", false, "dead dragon"),
            new _Items(31, "a STONE", true, "STONE"),
            new _Items(32, "a FISH", true, "FISH"),
            new _Items(33, "a KNIFE", true, "KNIFE"),
            new _Items(34, "a DRAGONSKIN", true, "DRAGONSKIN"),
            new _Items(35, "a dragonskin SHOES", true, "SHOES"),
            new _Items(36, "a PRIZE", true, "PRIZE"),
            new _Items(37, "a SHEEP", true, "SHEEP")
        ],
        interaction: [
            new _Interaction(10, "45", 11, "You opened a tool shed and took an axe", "H"),
            new _Interaction(11, "56", 12, "You cut sticks for sheeplegs", "H"),
            new _Interaction(12, "32", 13, "You prepared legs for your fake sheep", "L", "OK"),
            new _Interaction(14, "23", 15, "The tavern owner paid you money", "H"),
            new _Interaction(15, "26", 16, "The cooper sold you a new barrel", "H"),
            new _Interaction(16, "32", 17, "You made a nice sheeptrunk", "L", "OK"),
            new _Interaction(18, "25", 19, "The butcher gave you wool", "H"),
            new _Interaction(19, "32", 20, "You prepared skin for your fake sheep", "L", "OK"),
            new _Interaction(21, "46", 22, "You used your tools to make a rag", "H"),
            new _Interaction(22, "32", 23, "You made a fake sheephead", "L", "OK"),
            new _Interaction(24, "00", 25, "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you", "H", "OK"),
            new _Interaction(25, "32", 26, "You prepared a solid poison", "L"),
            new _Interaction(27, "10", 28, "You got a bucket full of tar", "H"),
            new _Interaction(28, "32", 29, "You prepared a liquid poison", "L", "OK"),
            new _Interaction(/*gdy zebrane wszystkie przedmioty(6 * OK),*/6, "32", 37, "Your fake sheep is full of poison and ready to be eaten by the dragon"),
            new _Interaction(37, "32", 30, "The dragon noticed your gift... (timeout) The dragon ate your sheep and died!", "L", "OK"), //- podmiana grafiki na lokacji (martwy smok)!
            new _Interaction(33, "32" /*+zabity smok*/, 34, "You cut a piece of dragon's skin", "H"),
            new _Interaction(34, "46", 35, "You used your tools to make shoes", "H"),
            new _Interaction(35, "30", 36, "The King is impressed by your shoes", "H"),
            new _Interaction(36, "30")
        ],
        start: function () {
            document.getElementById("kierunek").addEventListener('keydown', game.player.input);
            document.addEventListener("keydown", game.player.caps)
            this.fokus()
            var el = document.createElement("div")
            el.className = "all"
            el.style.height = window.innerHeight + "px"
            document.body.prepend(el)
            var wejscie = new Image()
            wejscie.src = "img/czołówka.jpg"
            wejscie.className = "start"
            document.body.scrollTop = 110
            document.getElementsByClassName("all")[0].prepend(wejscie)
            setTimeout(function () {
                wejscie.src = "img/opis_A.jpg"
                wejscie.className = "start"
                wejscie.height = window.height
                document.getElementsByClassName("all")[0].innerHTML = ""
                document.getElementsByClassName("all")[0].prepend(wejscie)
            }, 2000)
            setTimeout(function () {
                wejscie.src = "img/opis_B.jpg"
                wejscie.className = "start"
                document.getElementsByClassName("all")[0].innerHTML = ""
                document.getElementsByClassName("all")[0].prepend(wejscie)
            }, 4000)
            myTime = setTimeout(function () {
                document.body.children[0].remove()
                game.player.zmiana()
            }, 6000)

        },
        fokus: function () {
            document.getElementById("kierunek").addEventListener("shiftKey", function () {
                console.log("shift")
            })
            document.addEventListener("click", function () {
                document.getElementById("kierunek").focus()
            });
        },
        player: {
            myTime: 0,
            pos_x: 3,
            pos_y: 6,
            hand_item: {
                name: "xd",
                flag: 0
            },
            milestones: 0,
            isDead: false,
            isCaps: true,
            report: function (p) {
            },
            go: function (direction) {

                if (direction.toString() == "NORTH" || direction == "N")
                    if (game.board[game.player.pos_x][game.player.pos_y].north == "YES") {
                        game.player.pos_x--;
                        document.getElementById("uwagi").innerHTML = "You are going north..."
                        game.player.timeout()
                    }
                    else
                        document.getElementById("uwagi").innerHTML = "You can't go there"
                if (direction.toString() == 'SUD' || direction.toString() == "S")
                    if (game.board[game.player.pos_x][game.player.pos_y].sud == "YES") {
                        game.player.pos_x++;
                        document.getElementById("uwagi").innerHTML = "You are going south..."
                        game.player.timeout()
                    }
                    else
                        document.getElementById("uwagi").innerHTML = "You can't go there"
                if (direction.toString() == 'WEST' || direction.toString() == "W")
                    if (game.board[game.player.pos_x][game.player.pos_y].west == "YES") {
                        if (game.player.pos_x == 3 && game.player.pos_y == 1 && game.player.isDead) {
                            game.player.pos_y--;
                            document.getElementById("uwagi").innerHTML = "You are going to KING..."
                            game.player.timeout()
                        }
                        else if (game.player.pos_x == 3 && game.player.pos_y == 1 && game.player.isDead == false) {
                            setTimeout(function () {
                                document.getElementById("uwagi").innerHTML = "You can't go that way..."
                            }, 1000)
                            setTimeout(function () {
                                document.getElementById("uwagi").innerHTML = "The dragon sleeps in a cave!"
                            }, 2000)
                        }
                        else {
                            game.player.pos_y--;
                            document.getElementById("uwagi").innerHTML = "You are going west..."
                            game.player.timeout()
                        }
                    }
                    else
                        document.getElementById("uwagi").innerHTML = "You can't go there"
                if (direction.toString() == 'EAST' || direction.toString() == "E")
                    if (game.board[game.player.pos_x][game.player.pos_y].east == "YES") {
                        game.player.pos_y++;
                        document.getElementById("uwagi").innerHTML = "You are going east..."
                        game.player.timeout()
                    }
                    else
                        document.getElementById("uwagi").innerHTML = "You can't go there"
                console.log(game.player.pos_x, game.player.pos_y)
            },

            timeout: function () {
                document.getElementById("kierunek").disabled = true
                myTime = setTimeout(this.zmiana, 500)
            },
            help: function (a) {

                if (a == "V" || a == "VOCABULARY") {
                    document.getElementById("kier").innerHTML = "";
                    document.getElementById("see").innerHTML = ""
                    document.getElementById("item").innerHTML = ""
                    document.getElementById("kier").innerHTML = "NORTH or N, SOUTH or S</br>WEST or W, EAST or E</br>TAKE (object) or T (object)</br>DROP (object) or D (object)</br>USE (object) or U (object)</br>GOSSIPS or G, VOCABULARY or V</br>Press any key"
                    document.getElementsByTagName("label")[0].style.display = "none"
                    if (event.wchich == 32)
                        console.log("SPACJA")
                    //press()
                    window.onkeydown = press()
                }

                function press() {
                    setTimeout(game.player.zmiana, 200)
                    document.getElementsByTagName("label")[0].style.display = "block"
                }
            },
            caps: function (e) {
                e.preventDefault()
                console.log(e.key)
                let valiue = document.getElementById("kierunek").value
                if (e.keyCode == 20 || e.keyCode == 16)
                    if (game.player.isCaps)
                        game.player.isCaps = false
                    else
                        game.player.isCaps = true
                if (e.keyCode == 8)
                    document.getElementById("kierunek").value = document.getElementById("kierunek").value.substr(0, valiue.length - 1)
                if (e.keyCode == 32)
                    document.getElementById("kierunek").value += " "
                if (game.player.isCaps && e.keyCode < 91 && e.keyCode > 47) {
                    document.getElementById("kierunek").value += e.key.toUpperCase()
                }
                else if (!game.player.isCaps && e.keyCode < 90 && e.keyCode > 47)
                    document.getElementById("kierunek").value += e.key.toLowerCase()

            },
            input: function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault()
                    var key = document.getElementById("kierunek").value
                    console.log(key)
                    if (["N", "E", "S", "W", "NORTH", "EAST", "SOUTH", "WEST"].includes(key))
                        game.player.go(key);
                    else if (["T", "TAKE"].includes(key.split(" ")[0]))
                        game.player.action(key)
                    else if (["D", "DROP"].includes(key.split(" ")[0]))
                        game.player.drop(key)
                    else if (["U", "USE"].includes(key.split(" ")[0]))
                        game.player.use(key)
                    else if (["V", "VOCABULARY", "G", "GOSSIPS"].includes(key))
                        game.player.help(key)
                    else
                        document.getElementById("uwagi").innerText = "Try another word or V for vocabulary"
                    document.getElementById("kierunek").value = ""
                }
            },
            action: function (a) {
                console.log(a.split(" "))
                var przedmiot
                if (game.board[game.player.pos_x][game.player.pos_y].item.length != 0)
                    game.board[game.player.pos_x][game.player.pos_y].item.forEach(i => {
                        if (game.items[game.items.findIndex(x => x.id == i)].name == a.split(" ")[1])
                            przedmiot = game.items[game.items.findIndex(x => x.id == i)]
                        return przedmiot
                    })
                if (przedmiot == undefined)
                    document.getElementById("uwagi").innerHTML = "There isn't anything like that here"
                else if (przedmiot.flag == false)
                    document.getElementById("uwagi").innerHTML = "You can't carry it"
                else if (a.split(" ")[1] == przedmiot.name || a.split(" ")[1] == przedmiot.name && game.player.hand_item.name == "xd") {
                    console.log("Podnosze")
                    game.player.hand_item.name = przedmiot.name
                    game.player.hand_item.flag = przedmiot.flag
                    game.board[game.player.pos_x][game.player.pos_y].item.splice(game.board[game.player.pos_x][game.player.pos_y].item.indexOf(przedmiot.id), 1)
                    game.board[game.player.pos_x][game.player.pos_y].flagi--;
                    document.getElementById("uwagi").innerHTML = "You are taking " + przedmiot.itemtext
                    setTimeout(function () {
                        game.player.zmiana()
                    }, 1000)
                }

            },
            drop: function (a) {
                var przedmiot = game.items[game.items.findIndex(x => x.name == game.player.hand_item.name)]
                if (a.split(" ")[1] == game.player.hand_item.name || a.split(" ")[1] == game.player.hand_item.name) {
                    console.log("Upuszczam")
                    if (game.board[game.player.pos_x][game.player.pos_y].flagi < 3 || przedmiot.flag == false) {
                        game.board[game.player.pos_x][game.player.pos_y].item.push(przedmiot.id)
                        game.board[game.player.pos_x][game.player.pos_y].flagi++
                        document.getElementById("uwagi").innerHTML = "You are about to drop " + game.player.hand_item.name
                        game.player.hand_item.name = "xd"
                        game.player.hand_item.flag = 0
                        setTimeout(function () {
                            game.player.zmiana()
                        }, 1000)
                    }
                    else if (game.board[game.player.pos_x][game.player.pos_y].flagi >= 3)
                        document.getElementById("uwagi").innerHTML = "You can't store any more here"
                    else
                        document.getElementById("uwagi").innerHTML = "You can't store any more here"

                }
                else if (game.player.hand_item.name == "xd")
                    document.getElementById("uwagi").innerHTML = "You are not carrying anything"
                else if (a.split(" ")[1] != game.player.hand_item.name)
                    document.getElementById("uwagi").innerHTML = "You are not carrying it"
            },
            use: function (a) {
                var xx = game.player.pos_x
                var yy = game.player.pos_y
                if (game.interaction[game.interaction.findIndex(x => x.location == "" + xx + yy)] != undefined && game.player.hand_item.name != "xd") {
                    var zaleznosc = game.interaction[game.interaction.findIndex(x => x.id == game.items[game.items.findIndex(x => x.name == game.player.hand_item.name)].id)]
                    var itemek = game.items[game.items.findIndex(x => x.name == game.player.hand_item.name)]

                    if (zaleznosc.id == 24 && a.split(" ")[1] == game.player.hand_item.name && game.player.hand_item.name == "SPADE") {
                        document.getElementById("uwagi").innerHTML = ""
                        console.log(zaleznosc.text.split("(timeout)"))
                        for (let i = 0; i < 3; i++) {
                            setTimeout(function () {
                                document.getElementById("uwagi").innerHTML = ""
                                document.getElementById("uwagi").innerHTML = zaleznosc.text.split("(timeout)")[i]
                            }, 1000 * i)
                        }
                        var its = game.items[game.items.findIndex(x => x.id == zaleznosc.newitem)]
                        game.player.hand_item.name = its.name
                        game.player.hand_item.flag = its.flagi
                        setTimeout(function () {
                            game.player.zmiana()
                        }, 3500)
                    }
                    else if (zaleznosc.id == 37 && a.split(" ")[1] == game.player.hand_item.name && game.player.hand_item.name == "SHEEP") {
                        document.getElementById("uwagi").innerHTML = ""
                        console.log(zaleznosc.text.split("(timeout)"))
                        for (let i = 0; i < 2; i++) {
                            setTimeout(function () {
                                document.getElementById("uwagi").innerHTML = ""
                                document.getElementById("uwagi").innerHTML = zaleznosc.text.split("(timeout)")[i]
                            }, 2000 * i)
                        }

                        setTimeout(function () {
                            game.player.zmiana()
                            game.board[game.player.pos_x][game.player.pos_y].img = "DS68.bmp"
                            game.player.hand_item.name = "xd"
                            game.player.hand_item.flag = 0
                            game.player.isDead = true
                            game.board[game.player.pos_x][game.player.pos_y].item.push(game.items[20].id)
                            game.board[game.player.pos_x][game.player.pos_y].flagi++
                            game.player.zmiana()
                        }, 5500)

                    }
                    else if (itemek.id == zaleznosc.id && a.split(" ")[1] == game.player.hand_item.name && zaleznosc.location == xx + "" + yy) {
                        document.getElementById("uwagi").innerHTML = zaleznosc.text
                        if (zaleznosc.where == "H") {
                            var its = game.items[game.items.findIndex(x => x.id == zaleznosc.newitem)]
                            game.player.hand_item.name = its.name
                            game.player.hand_item.flag = its.flagi
                            setTimeout(function () {
                                game.player.zmiana()
                            }, 1000)
                        }
                        else if (zaleznosc.where == "L") {
                            var its = game.items[game.items.findIndex(x => x.id == zaleznosc.newitem)]
                            game.player.hand_item.name = "xd"
                            game.player.hand_item.flag = 0
                            game.board[game.player.pos_x][game.player.pos_y].item.push(its.id)
                            game.player.milestones++;
                            setTimeout(function () {
                                game.player.zmiana()
                            }, 1000)
                        }
                    }
                    else if (game.items[game.items.findIndex(x => x.name == game.player.hand_item.name)].id != zaleznosc.id)
                        document.getElementById("uwagi").innerHTML = "Nothing happened"
                    else if (zaleznosc.location != xx + "" + yy)
                        document.getElementById("uwagi").innerHTML = "You can't do it here"
                    if (game.player.milestones == 6) {
                        setTimeout(function () {
                            game.board[game.player.pos_x][game.player.pos_y].item.forEach(j => {
                                if (game.items[game.items.findIndex(x => x.id == j)].flag == false)
                                    game.board[game.player.pos_x][game.player.pos_y].item.splice(game.board[game.player.pos_x][game.player.pos_y].item.indexOf(j), 1)
                            })
                            game.player.hand_item.name = "SHEEP"
                            game.player.hand_item.flag = true
                            game.player.milestones++
                            game.player.zmiana()
                            document.getElementById("uwagi").innerHTML = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                        }, 1500)
                    }
                }
                else if (game.player.hand_item.name == "xd")
                    document.getElementById("uwagi").innerHTML = "You aren't carrying anything like that"
                else
                    document.getElementById("uwagi").innerHTML = "You can't do it here"
                if (a.split(" ")[1] == game.player.hand_item.name && game.player.hand_item.name == "PRIZE") {
                    setTimeout(game.player.end, 2000)
                }
            },
            zmiana: function () {
                document.getElementById("uwagi").innerHTML = ""
                document.getElementById("zdj").innerHTML = "";
                document.getElementById("kier").innerHTML = "";
                document.getElementById("see").innerHTML = ""
                document.getElementById("item").innerHTML = ""
                document.getElementById("N").style.display = "block"
                document.getElementById("E").style.display = "block"
                document.getElementById("S").style.display = "block"
                document.getElementById("W").style.display = "block"
                document.getElementById("kierunek").disabled = false
                document.getElementById("kierunek").focus()
                document.getElementById("kier").innerHTML = "You can go: "
                document.getElementById("see").innerHTML = "You see: "
                document.getElementById("item").innerHTML = "You are carrying: "
                console.log(game.board[game.player.pos_x][game.player.pos_y])
                if (game.board[game.player.pos_x][game.player.pos_y].item.length != 0) {
                    game.board[game.player.pos_x][game.player.pos_y].item.forEach(i => {
                        document.getElementById("see").innerHTML += game.items[game.items.findIndex(x => x.id == i)].itemtext + " "
                    })
                }
                else
                    document.getElementById("see").innerHTML += "nothing"
                if (game.player.hand_item.name != "xd")
                    document.getElementById("item").innerHTML += game.items[game.items.findIndex(x => x.name == game.player.hand_item.name)].itemtext
                else
                    document.getElementById("item").innerHTML += "nothing"
                document.getElementById("where").innerHTML = game.board[game.player.pos_x][game.player.pos_y].where;
                var zdj = document.createElement("img");
                zdj.setAttribute("id", "jpg")
                zdj.setAttribute("src", "img/" + game.board[game.player.pos_x][game.player.pos_y].img);
                zdj.style.backgroundColor = game.board[game.player.pos_x][game.player.pos_y].color;
                document.getElementById("zdj").appendChild(zdj);
                if (game.board[game.player.pos_x][game.player.pos_y].north == "YES")
                    kierunki("north")
                if (game.board[game.player.pos_x][game.player.pos_y].east == "YES")
                    kierunki("east")
                if (game.board[game.player.pos_x][game.player.pos_y].sud == "YES")
                    kierunki("South")
                if (game.board[game.player.pos_x][game.player.pos_y].west == "YES")
                    kierunki("west")
                function kierunki(d) {
                    var z = d.substr(0, 1).toUpperCase()
                    document.getElementById("kier").innerHTML += (d.toUpperCase() + " ")
                    document.getElementById(z).style.display = "none"
                }
            },
            end: function () {
                document.getElementById("where").innerText = "YOU ARE WINNER!!!!!!"
                document.getElementById("uwagi").innerText = ""
                document.getElementById("kompas").style.display = "none"
                document.getElementById("kierunek").disabled = true
                document.getElementById("jpg").setAttribute("src", "img/winner.jpg")
                document.getElementById("kier").innerHTML = "You can go: "
                document.getElementById("see").innerHTML = "You see: "
                document.getElementById("item").innerHTML = "You are carrying: "
            }
        }
    }
    game.start()
});
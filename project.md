# Möbel Bergamo

**Bitte bis zum Ende lesen**

## Erste Schritte

- legt eine neue React Anwendung (ausser diesem Repository) FERTIG
- installier dazu die notwendige Abhängigkeiten
- die API muss laufen entweder bei einem 2. Instanz VSC oder im Terminal

## Ziel

Das Ziel ist das Frontend für Möbel Bergamo Shop zu bauen
Die designs sind schon im Ordner Designs verfügbar. Die Designs sind _Mobile-First_ .Ein Desktop version ist leider nicht verfügbar - allerdings nicht erwartet. Ihr kann es als Mobile-First präsentieren.

## Frist

Das Projekt muss um 15:30 geliefert werden. 

## Team & Vorplanen

Bevor ihr mit dem Projekt anfängt, muss gewissene Entscheidungen treffen:

### "nicht-technische" Entscheidungen

- wie ihr Entscheidungen trifft
- wie oft ihr euch trifft
- Aufgabeaufteilung
- Art programieren (jede für sich selbst, pair programming, code review...)
- wie ihr mit github umgeht (darf jede mergen?)
- Aufgabereihenfolge
- Zeitspann (wann sollte X fertig sein)

### technische Entscheidungen

- was ist ein Component
- welche Ordner | wie werden die genannt
- womit und wie stylen
- womit icons

## schau dir die API an!

bevor ihr anfängt damit zu arbeiten, kann interessant sein zu sehen, was genau die API wirft, um eine bessere Vorstellung zu haben

## MVP

das MVP (Minimum Viable Product - kleinste Fassung) besteht aus:

### Pages

- Home
- ProductPage
- CategoryPage

in CategoryPage sollten nur Produkte dargestellt, die

- ContactPage

### Components

_Bau die nötige Components dazu_

- **der Bereich mit Icons in _Home_ und _CategoryPage_** (Popular, Chair, Table, Armchair, ...) gilt als nav. Dh jede Icon und Text

```
<div>
    <img src="">
    <p>Popular</p>
</div>
```

sollte zum passenden CategoryPage führen

- **die navbar** mit 4 Icons ganz unten sollten zu bestimte Pages führen

| icon          | page          |
| ------------- | ------------- |
| home          | home          |
| Merkzettel    | FavoritesPage |
| Kart          | CartPage      |
| Briefumschlag | ContactPage   |
| Profile       | ProfilePage   |

Da FavoritesPage, CartPage und ProfilePage derzeit (bzw nicht im MVP mitdabei), müssen diese Icons momentan keine Links haben

- Die folgende Elemente:

  - search
  - cart
  - shoppingBag

sollen addiert werden, **keine Funktionalität muss aber implementier werden**

## CSS Werte

Die folgende Werte sind im ursprünglichen Design benutz:

### Colors

_die Name sind die im Design ursprünglich benutzt. Selbsverständlich darf ihr die nutzten, muss ihr aber nicht_

| color name          | hex Wert |
| ------------------- | -------- |
| primary             | #242424  |
| placeholder         | #B3B3B3  |
| secondary-button-bg | #F0F0F0  |
| disabled-button     | #999999  |
| disabled-field      | #F5F5F5  |
| success             | #27AE60  |
| stroke-divider      | #DBDBDB  |

### Font Family

| Anwendung | font-family |
| --------- | ----------- |
| headings  | Gelasio     |
| sonst     | Nunito Sans |



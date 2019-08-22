# ESP-NOW Arduino

สื่อสารระหว่างบอร์ด ESP32 ด้วย ESP-NOW ปลั๊กอินสำหรับโปรแกรม KBIDE

## การติดตั้ง

**การติดตั้งแบบออนไลน์** ติดตั้งได้โดยใช้ Plugin Manager ค้นหา ESP-NOW

**ติดตั้งแบบออฟไลน์** กดปุ่ม Clone or download แล้วกดปุ่ม Download ZIP แล้วแตกไฟล์ออกมา ได้โฟลเดอร์ `ESP-NOW_Arduino-master` ให้ย้ายโฟลเดอร์ `ESP-NOW_Arduino-master` ไปไว้ที่ `[ไดร์ที่ติดตั้ง Windows]:\Users\[USERNAME]\AppData\Local\Programs\kbide\plugins`

เมื่อติดตั้งเสร็จแล้ว จะมีบล็อกเพิ่มขึ้นมาในเมนู Plugins > ESP-NOW

## การใช้งาน

ปลั๊กอิน ESP-NOW Arduino มีบล็อกให้ใช้งาน ดังนี้

![ZRnmkk.png](https://sv1.picz.in.th/images/2019/08/23/ZRnmkk.png)

### บล็อก Setup



### บล็อก get my mac address

ใช้อ่านค่า MAC Address ของตัวเอง เพื่อใช้เป็นข้อมูลให้บอร์ดอื่นส่งข้อมมูลมาหาได้

### บล็อก send ...

ใช้ส่งข้อความ ตัวเลข ไปยังบอร์ด ESP32 ตัวอื่น (Broadcast)

### บล็อก send ... to ...

ใช้ส่งข้อความ ตัวเลข ไปยังบอร์ด ESP32 เฉพาะตัวที่กำหนด (Unicast) โดยใช้ MAC Address

### บล็อก on receiving

ใช้ใส่บล็อกที่จะให้ทำงานเมื่อบอร์ด ESP32 ได้รับข้อมูลจากบอร์ดอื่น

### บล็อก read text

ใช้อ่านข้อความที่ส่งมาจากบอร์ด ESP32 บอร์ดอื่น ใช้กับบล็อกแอลอีดี 16x8 แบบเลื่อนเมื่อพร้อม

### บล็อก read number

ใช้อ่านตัวเลขที่ส่งมาจากบอร์ด ESP32 บอร์ดอื่น กรณีข้อมูลที่รับมาจากบอร์ดอื่นไม่ใช่ตัวเลข จะให้ค่าเป็น 0

## ตัวอย่างโค้ดโปรแกรม

### ส่งค่าการกดปุ่มไปยังบอร์ด ESP32 ทุกตัวผ่าน ESP-NOW

ฝั่งส่ง

![ZRrfXy.png](https://sv1.picz.in.th/images/2019/08/23/ZRrfXy.png)

ฝั่งรับ

![ZRrtWb.png](https://sv1.picz.in.th/images/2019/08/23/ZRrtWb.png)

### ส่งค่าการกดปุ่มไปยังบอร์ด ESP32 ตัวที่กำหนดผ่าน ESP-NOW

ฝั่งส่ง

![ZRrKeq.png](https://sv1.picz.in.th/images/2019/08/23/ZRrKeq.png)

หมายเหตุ. แก้บล็อก send ... to ... ตรงหลัง to ให้แก้เป็น MAC Address ของตัวรับที่ต้องการจะส่งไป (MAC Address ได้จากการใช้บล็อก get my mac address)


ฝั่งรับ

![ZRrtWb.png](https://sv1.picz.in.th/images/2019/08/23/ZRrtWb.png)

## แจ้งปัญหา และติดต่อนักพัฒนา

ให้เปิด Issues มาได้เลย


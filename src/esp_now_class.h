#ifndef __ESP_NOW_CLASS_H__
#define __ESP_NOW_CLASS_H__

#include <stdio.h>
#include <string.h>

#include "esp_now.h"
#include "WiFi.h"
#include "Arduino.h"

typedef void(*ESPNOWRecvCallback)();
static ESPNOWRecvCallback recv_cb = NULL;
static char recv_buff[256];

class ESP_NOW_CLASS {
	private:		
		uint8_t broadcastMACAddr[6] = { 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF };
		char myMAC[20] ;
		esp_now_peer_info_t slave;
		
	public:
		// constructor
		ESP_NOW_CLASS() ;
		
		void init() ;
		String getMAC() ;
		void send(char*) ;
		void send(float) ;
		void send(char*, char*) ;
		void send(char*, float) ;
		void onRecv(ESPNOWRecvCallback fn) ;
		String readString() ;
		float readNumber() ;
		
};

#endif
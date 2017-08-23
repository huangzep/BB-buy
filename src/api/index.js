import jsonp from 'common/js/jsonp'

export function getmenus() {
  const url = 'http://139.199.192.48:9090/api/getindexmenu'

  return jsonp(url, {})
}

export function getProducts() {
	const url = 'http://139.199.192.48:9090/api/getmoneyctrl'

	return jsonp(url, {})
}

export function getTitles() {
	const url = 'http://139.199.192.48:9090/api/getcategorytitle'

	return jsonp(url, {})
}

export function getCategorys(id) {
	const url = 'http://139.199.192.48:9090/api/getcategory'

	return jsonp(url, {titleid: Number(id)})
}

export function getProductList(id) {
	const url = 'http://139.199.192.48:9090/api/getproductlist'

	return jsonp(url, {categoryid: id, pageid: 1})
}

export function getProduct(id) {
	const url = 'http://139.199.192.48:9090/api/getproduct'

	return jsonp(url, {productid: id})
}

export function getProductCom(id) {
	const url = 'http://139.199.192.48:9090/api/getproductcom'

	return jsonp(url, {productid: id})
}

export function getMoneyCtrl(id) {
	const url = 'http://139.199.192.48:9090/api/getmoneyctrl'

	return jsonp(url, {pageid: id})
}

export function getDiscount() {
	const url = 'http://139.199.192.48:9090/api/getinlanddiscount'

	return jsonp(url, {})
}

export function getDiscountProduct(id) {
	const url = 'http://139.199.192.48:9090/api/getdiscountproduct'
	
	return jsonp(url, {productid: id})
}

export function getBaicaiTitle() {
	const url = 'http://139.199.192.48:9090/api/getbaicaijiatitle'
	
	return jsonp(url, {})
}

export function getBaicaiProduct(id=0) {
	const url = 'http://139.199.192.48:9090/api/getbaicaijiaproduct'
	
	return jsonp(url, {titleid: id})
}





fetch("Projects/ProjectItems.json")
    .then(response => response.json())
    .then(ProcessJson);


function ProcessJson(json)
    {
        let projContainer = document.getElementById("ProjectContainer")

        while (projContainer.hasChildNodes())
            projContainer.removeChild(projContainer.lastChild)

        // let items = JSON.

        // projContainer.appendChild(document.createTextNode(json["items"][0]["name"]))
        let i = 0
        let html = ""
        while (json["items"][i] !== undefined) {
            GetHtmlElement(projContainer, json["items"][i])
            i++
        }
    }

function GetHtmlElement(projContainer, json)
    {
        let containerClassName = "\"col-lg-4 col-md-6 portfolio-item isotope-item "
        let i = 0
        while (json["tags"][i] !== undefined)
        {
            containerClassName += "filter-" + json["tags"][i] + " "
            i++;
        }
        containerClassName += "\""

        let imagePath = json["image"]

        console.log(containerClassName)
        let stringHTML = '<div class=' + containerClassName + '>\n' +
            '              <div class="portfolio-content h-100">\n' +
            '                <img src=' + imagePath + ' class="img-fluid" alt= ' + json["image_alt"] + '></img>\n' +
            '                <div class="portfolio-info">\n' +
            '                  <h4>' + json["name"] + '</h4>\n' +
            '                  <p>' + json["description"] + '</p>\n' +
            '                  <a href=' + imagePath + ' title=' + json["name"] + ' data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>\n' +
            '                  <a href=' + json["link"] + ' title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>\n' +
            '                </div>\n' +
            '              </div>\n' +
            '            </div>'

        projContainer.innerHTML = projContainer.innerHTML + stringHTML
        // let element = (<div className={containerClassName}></div>)
            // let element1 = <div className="portfolio-content h-100"></div>
            //     let image = <img src={json["image"]} className="img-fluid" alt={json["image_alt"]}></img>
            //     element1.appendChild(image)
            //     let element2 = <div className="portfolio-content h-100"></div>
            //         element2.appendChild(image)
                    // element2.appendChild(<h4>{json["name"]}</h4>)
                    // element2.appendChild(<p>{json["description"]}</p>)
                    // element2.appendChild(<a href={json["image"]} title={json["title"]} data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>)
                    // element2.appendChild(<a href={json["link"]} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>)
            // element1.appendChild(element2)
        // element.appendChild(element1)

    }




class User {
  public address: string;
  private likes: Set<string>;
  private dislikes: Set<string>;
  public reviews: Map<string, string>;
  constructor(
    address: string,
    likes: Set<string>,
    dislikes: Set<string>,
    reviews: Map<string, string>
  ) {
    this.address = address;
    this.likes = likes;
    this.dislikes = dislikes;
    this.reviews = reviews;
  }
}

class Content {
  public cid: string;
  public content: string;
  public reviews: Map<string, string>;
  public likes: number;
  public dislikes: number;
  public views: number;
  constructor(
    cid: string,
    content: string,
    reviews: Map<string, string>,
    likes: number,
    dislikes: number,
    views: number
  ) {
    this.cid = cid;
    this.content = content;
    this.reviews = reviews;
    this.likes = likes;
    this.dislikes = dislikes;
    this.views = views;
  }
}
class Adspace {
  public nft_id: string;
  public content: string;
  constructor(nft_id: string, content: string) {
    this.nft_id = nft_id;
    this.content = content;
  }
}

class Creator {
  public address: string;
  public content: Set<Content>;
  public adspace: Adspace;
  constructor(address: string, content: Set<Content>, adspace: Adspace) {
    this.address = address;
    this.content = content;
    this.adspace = adspace;
  }
}

class Advertiser {
  public address: string;
  private adspaces: Set<Adspace>;
  constructor(address: string, adspaces: Set<Adspace>) {
    this.address = address;
    this.adspaces = adspaces;
  }
}
